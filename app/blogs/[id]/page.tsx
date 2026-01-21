"use client"

import { useState, useEffect } from "react"

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic'
import "./blog-content.css"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, User, ArrowLeft, Clock, Share2, Eye, ArrowRight, Copy, Check, Quote, Star, Lightbulb, Target, Zap, Shield, ChevronLeft, ChevronRight, FileText, Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface BlogDetail {
  blogId: number
  title: string
  pdfPath: string
  authorName?: string
  authorImage?: string
  authorTitle?: string
  author: {
    userId: number
    username: string
    fullName?: string
  }
  createdAt: string
  updatedAt: string
}

// Fallback images for different blog categories
const getFallbackImage = (category?: string) => {
  const categoryImages: Record<string, string> = {
    'AI & ML': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center',
    'Cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=center',
    'Education': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center',
    'Careers': 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&h=600&fit=crop&crop=center',
    'Research': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center',
    'Insights': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center'
  }

  return categoryImages[category || ''] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop&crop=center'
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [blog, setBlog] = useState<BlogDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [shareCopied, setShareCopied] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [pdfError, setPdfError] = useState<string | null>(null)
  const [pdfKey, setPdfKey] = useState(0) // Key to force iframe reload
  const [pageDirection, setPageDirection] = useState<'next' | 'prev' | null>(null)
  const [totalPages, setTotalPages] = useState<number | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/public/blogs/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch blog: ${response.status}`)
        }

        const rawData = await response.json()

        // Validate the response structure
        if (!rawData || typeof rawData !== 'object' || !rawData.blogId) {
          throw new Error('Invalid blog data received from API')
        }

        const data: BlogDetail = {
          blogId: (typeof rawData.blogId === 'number') ? rawData.blogId : 0,
          title: (rawData.title && typeof rawData.title === 'string') ? rawData.title : 'Untitled Blog',
          pdfPath: (rawData.pdfPath && typeof rawData.pdfPath === 'string') ? rawData.pdfPath : '',
          authorName: (rawData.authorName && typeof rawData.authorName === 'string')
            ? rawData.authorName
            : (rawData.author && typeof rawData.author === 'object' &&
               rawData.author.fullName && typeof rawData.author.fullName === 'string')
              ? rawData.author.fullName
              : (rawData.author && typeof rawData.author === 'object' &&
                 rawData.author.username && typeof rawData.author.username === 'string')
                ? rawData.author.username
                : 'Unknown Author',
          authorImage: (rawData.authorImage && typeof rawData.authorImage === 'string') ? rawData.authorImage : '',
          authorTitle: (rawData.authorTitle && typeof rawData.authorTitle === 'string') ? rawData.authorTitle : '',
          author: (rawData.author && typeof rawData.author === 'object') ? rawData.author : { userId: 0, username: 'unknown', fullName: '' },
          createdAt: (rawData.createdAt && typeof rawData.createdAt === 'string') ? rawData.createdAt : new Date().toISOString(),
          updatedAt: (rawData.updatedAt && typeof rawData.updatedAt === 'string') ? rawData.updatedAt : new Date().toISOString()
        }

        setBlog(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  // Load PDF and get total page count
  useEffect(() => {
    const loadPdfPageCount = async () => {
      if (!blog?.pdfPath || typeof window === 'undefined') return

      try {
        // Dynamically load PDF.js from CDN
        if (!(window as any).pdfjsLib) {
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
          document.head.appendChild(script)
          
          await new Promise((resolve, reject) => {
            script.onload = resolve
            script.onerror = reject
          })
        }

        const pdfjsLib = (window as any).pdfjsLib
        if (!pdfjsLib) {
          console.error('PDF.js library not loaded')
          return
        }

        // Set worker path
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

        const pdfPath = blog.pdfPath.startsWith('/') ? blog.pdfPath : `/${blog.pdfPath}`
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
        const pdfUrl = `${apiBaseUrl}${pdfPath}`

        const loadingTask = pdfjsLib.getDocument(pdfUrl)
        const pdf = await loadingTask.promise
        setTotalPages(pdf.numPages)
      } catch (error) {
        console.error('Error loading PDF page count:', error)
        // If we can't get the page count, set it to null (unlimited scrolling)
        setTotalPages(null)
      }
    }

    loadPdfPageCount()
  }, [blog?.pdfPath])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getReadingTime = (content: string) => {
    // Strip HTML tags and calculate reading time
    const text = content.replace(/<[^>]*>/g, '')
    const wordsPerMinute = 200
    const words = text.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const getBlogCategory = (title: string): string => {
    if (!title || typeof title !== 'string') return 'Insights'

    try {
      const content = title.toLowerCase()

      if (content.includes('ai') || content.includes('artificial intelligence') || content.includes('machine learning')) {
        return 'AI & ML'
      }
      if (content.includes('cybersecurity') || content.includes('security') || content.includes('hacking') || content.includes('privacy')) {
        return 'Cybersecurity'
      }
      if (content.includes('workshop') || content.includes('training') || content.includes('education')) {
        return 'Education'
      }
      if (content.includes('career') || content.includes('job') || content.includes('future')) {
        return 'Careers'
      }
      if (content.includes('research') || content.includes('study') || content.includes('analysis')) {
        return 'Research'
      }
      return 'Insights'
    } catch (error) {
      return 'Insights'
    }
  }

  // Get category for current blog
  const getCurrentBlogCategory = () => {
    if (!blog) return ''
    return getBlogCategory(blog.title)
  }

  const shareBlog = async () => {
    if (!blog) return

    const shareUrl = window.location.href
    const shareTitle = blog.title || 'Blog Article'
    const shareText = `Check out this article: ${blog.title || 'Blog Article'}`

    try {
      // Try native Web Share API first (mobile devices)
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        })
        toast({
          title: "Shared successfully!",
          description: "Article shared via device sharing.",
        })
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareUrl)
        setShareCopied(true)
        toast({
          title: "Link copied!",
          description: "Article link copied to clipboard.",
        })

        // Reset the copied state after 2 seconds
        setTimeout(() => setShareCopied(false), 2000)
      }
    } catch (error) {
      // Handle share cancellation or errors
      if ((error as Error).name !== 'AbortError') {
        toast({
          title: "Share failed",
          description: "Unable to share article. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  // PDF Navigation functions
  const goToPreviousPage = () => {
    if (currentPage > 1 && !isAnimating) {
      setIsAnimating(true)
      setPageDirection('prev')
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      setPdfKey(prev => prev + 1) // Force iframe reload
      setTimeout(() => {
        setIsAnimating(false)
        setPageDirection(null)
      }, 600)
    }
  }

  const goToNextPage = () => {
    // Check if we've reached the last page
    if (!isAnimating && (totalPages === null || currentPage < totalPages)) {
      setIsAnimating(true)
      setPageDirection('next')
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      setPdfKey(prev => prev + 1) // Force iframe reload
      setTimeout(() => {
        setIsAnimating(false)
        setPageDirection(null)
      }, 600)
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && !isAnimating && (totalPages === null || page <= totalPages)) {
      setIsAnimating(true)
      setPageDirection(page > currentPage ? 'next' : 'prev')
      setCurrentPage(page)
      setPdfKey(prev => prev + 1) // Force iframe reload
      setTimeout(() => {
        setIsAnimating(false)
        setPageDirection(null)
      }, 600)
    }
  }

  // PDF Viewer Component
  const renderPdfViewer = () => {
    // Check if pdfPath exists and is not empty
    const hasPdf = blog?.pdfPath && typeof blog.pdfPath === 'string' && blog.pdfPath.trim().length > 0
    
    if (!hasPdf) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <FileText className="w-16 h-16 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">PDF Not Available</h3>
          <p className="text-sm text-muted-foreground">The PDF content for this article is currently being prepared.</p>
        </div>
      )
    }

    // Construct PDF URL - ensure it starts with / and use the API base URL
    // Add parameters to hide browser's built-in PDF controls (toolbar, navigation panes, etc.)
    const pdfPath = blog.pdfPath.startsWith('/') ? blog.pdfPath : `/${blog.pdfPath}`
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
    // toolbar=0: Hide toolbar (download, print, etc.)
    // navpanes=0: Hide navigation panes
    // scrollbar=0: Hide scrollbar
    // view=FitV: Fit page height (shows full page vertically)
    // page=X: Go to specific page
    const pdfUrl = `${apiBaseUrl}${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitV&page=${currentPage}`

    return (
      <div className="space-y-6">
        {pdfError && (
          <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4 mb-4">
            <p className="text-destructive text-sm">{pdfError}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => {
                setPdfError(null)
                setPdfLoaded(false)
              }}
            >
              Try Again
            </Button>
          </div>
        )}
        
        {/* PDF Viewer Container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl border perspective-1000" style={{ overflow: 'hidden' }}>
          <style jsx>{`
            .perspective-1000 {
              perspective: 1500px;
            }
            .page-turn-next {
              animation: pageTurnNext 0.6s ease-in-out;
            }
            .page-turn-prev {
              animation: pageTurnPrev 0.6s ease-in-out;
            }
            .pdf-no-scroll {
              position: relative;
            }
            .pdf-no-scroll::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              pointer-events: none;
              z-index: 1;
            }
            .pdf-no-scroll iframe {
              overflow: hidden !important;
            }
            @keyframes pageTurnNext {
              0% {
                transform: rotateY(0deg);
                opacity: 1;
              }
              50% {
                transform: rotateY(-90deg);
                opacity: 0.5;
              }
              100% {
                transform: rotateY(0deg);
                opacity: 1;
              }
            }
            @keyframes pageTurnPrev {
              0% {
                transform: rotateY(0deg);
                opacity: 1;
              }
              50% {
                transform: rotateY(90deg);
                opacity: 0.5;
              }
              100% {
                transform: rotateY(0deg);
                opacity: 1;
              }
            }
          `}</style>
          <div className={`
            pdf-no-scroll
            ${pageDirection === 'next' ? 'page-turn-next' : ''}
            ${pageDirection === 'prev' ? 'page-turn-prev' : ''}
            transform-gpu
          `} style={{ overflow: 'hidden' }}>
            {!pdfLoaded && !pdfError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Loading PDF...</p>
                </div>
              </div>
            )}
            <div style={{ 
              overflow: 'hidden', 
              position: 'relative', 
              height: '1000px',
              touchAction: 'none',
              overscrollBehavior: 'none'
            }} className="sm:h-[1200px] md:h-[1400px] lg:h-[1500px]">
            <iframe
                key={pdfKey}
              src={pdfUrl}
                className="w-full h-full border-0"
                title={`PDF Viewer - ${blog.title}`}
                style={{ 
                  overflow: 'hidden',
                  touchAction: 'none',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
                scrolling="no"
                onLoad={() => {
                  setPdfLoaded(true)
                  setPdfError(null)
                }}
                onError={() => {
                  setPdfError('Failed to load PDF. Please try refreshing the page.')
                  setPdfLoaded(false)
                }}
            />
              {/* Overlay to block scroll but allow navigation buttons */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'all',
                  cursor: 'default',
                  zIndex: 2
                }}
                onWheel={(e) => e.preventDefault()}
                onTouchMove={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Navigation Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Previous Page Button */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage <= 1 || isAnimating || !pdfLoaded}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Page Button */}
            <button
              onClick={goToNextPage}
              disabled={isAnimating || !pdfLoaded || (totalPages !== null && currentPage >= totalPages)}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Page Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage <= 1 || isAnimating || !pdfLoaded}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page</span>
            <input
              type="number"
              min={1}
              max={totalPages || undefined}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value)
                if (page >= 1) {
                  goToPage(page)
                }
              }}
              className="w-20 px-2 py-1 text-center border rounded"
              placeholder="Page"
              disabled={!pdfLoaded}
            />
            {totalPages !== null && (
              <span className="text-sm text-muted-foreground">of {totalPages}</span>
            )}
          </div>

          <Button
            variant="outline"
            onClick={goToNextPage}
            className="flex items-center gap-2"
            disabled={isAnimating || !pdfLoaded || (totalPages !== null && currentPage >= totalPages)}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-background to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/blogs')}
              className="hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </div>

          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              BLOG ARTICLE
            </Badge>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-1/2 mx-auto" />
              <div className="flex justify-center gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="text-center py-16 border-destructive/50 bg-destructive/5">
              <CardContent>
                <BookOpen className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-destructive mb-2">Article Not Found</h2>
                <p className="text-muted-foreground mb-6">{error}</p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => router.push('/blogs')}>
                    Back to Blogs
                  </Button>
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Blog Content */}
          {!isLoading && !error && blog && (
            <>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4 leading-tight">
                {blog.title || 'Blog Article'}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.authorName || (blog.author ? blog.author.fullName || blog.author.username : 'Unknown Author')}</span>
                  {blog.authorTitle && (
                    <>
                      <span className="text-muted-foreground/50">•</span>
                      <span>{blog.authorTitle}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>PDF Document</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={shareBlog}
                  className="hover:bg-primary/10 dark:hover:bg-primary/20"
                  disabled={shareCopied}
                >
                  {shareCopied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Blog Content Section */}
      {!isLoading && !error && blog && (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* PDF Content */}
            <Card className="border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md shadow-xl">
              <CardContent className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-6 sm:px-8 lg:px-12">
                {renderPdfViewer()}
              </CardContent>
            </Card>

            {/* Article Footer */}
            <div className="mt-8 sm:mt-12">
              <Card className="border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {blog.authorImage && blog.authorImage.trim().length > 0 ? (
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}${blog.authorImage.startsWith('/') ? blog.authorImage : `/${blog.authorImage}`}`}
                          alt={blog.authorName || (blog.author ? blog.author.fullName || blog.author.username : 'Unknown Author')}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                          onError={(e) => {
                            // Fallback to initials if image fails
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling!.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 dark:from-primary/35 dark:to-primary/20 flex items-center justify-center ${blog.authorImage ? 'hidden' : ''}`}>
                        <span className="text-primary font-bold text-lg">
                          {(blog.authorName || (blog.author ? blog.author.fullName || blog.author.username : 'Unknown Author')).charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {blog.authorName || (blog.author ? blog.author.fullName || blog.author.username : 'Unknown Author')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {blog.authorTitle || 'Cybersecurity & AI Expert'}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={shareBlog}
                        className="hover:bg-primary/10 dark:hover:bg-primary/20"
                        disabled={shareCopied}
                      >
                        {shareCopied ? (
                          <>
                            <Check className="w-4 h-4 mr-2 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Article
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="mt-8 sm:mt-12 flex justify-between items-center">
              <Link href="/blogs">
                <Button variant="outline" className="hover:bg-primary/10 dark:hover:bg-primary/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Blogs
                </Button>
              </Link>

              <Link href="/get-involved">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
