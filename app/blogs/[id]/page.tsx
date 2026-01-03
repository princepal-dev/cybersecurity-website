"use client"

import { useState, useEffect } from "react"
import "./blog-content.css"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, User, ArrowLeft, Clock, Share2, Eye, ArrowRight, Copy, Check, Quote, Star, Lightbulb, Target, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface BlogDetail {
  blogId: number
  title: string
  description: string
  author: {
    userId: number
    username: string
    fullName?: string
  }
  images: Array<{
    imageId: number
    imageUrl: string
    displayOrder: number
  }>
  createdAt: string
  updatedAt: string
}

export default function BlogDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [blog, setBlog] = useState<BlogDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [shareCopied, setShareCopied] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/public/blogs/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch blog: ${response.status}`)
        }

        const data: BlogDetail = await response.json()
        setBlog(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching blog:', err)
        setError(err instanceof Error ? err.message : 'Failed to load blog')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [id])

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

  // Extract plain text from HTML content for sharing
  const extractTextFromHtml = (html: string, maxLength: number = 150) => {
    if (!html) return ''
    // Remove HTML tags
    const text = html.replace(/<[^>]*>/g, '')
    // Decode HTML entities
    const decoded = text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
    // Trim and limit length
    return decoded.trim().substring(0, maxLength) + (decoded.length > maxLength ? '...' : '')
  }

  const shareBlog = async () => {
    if (!blog) return

    const shareUrl = window.location.href
    const shareTitle = blog.title
    const shareText = extractTextFromHtml(blog.description)

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
        console.error('Share failed:', error)
        toast({
          title: "Share failed",
          description: "Unable to share article. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  // Clean, professional content renderer
  const renderContent = (content: string) => {
    if (!content) return null

    // Simple HTML processing - just clean up and format
    let processedContent = content

    // If it's plain text, convert to simple HTML
    if (!/<[a-z][\s\S]*>/i.test(content)) {
      processedContent = content
        .split('\n\n')
        .map(paragraph => {
          const trimmed = paragraph.trim()
          if (!trimmed) return ''

          // Simple heading detection
          if (trimmed.length < 100 && !trimmed.includes('.') && !trimmed.includes('?') && !trimmed.includes('!')) {
            return `<h2 class="blog-heading">${trimmed}</h2>`
          }

          // Simple list detection
          if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
            return `<ul class="blog-list"><li>${trimmed.replace(/^[*•\-]\s*/, '')}</li></ul>`
          }

          if (/^\d+\./.test(trimmed)) {
            return `<ol class="blog-list"><li>${trimmed.replace(/^\d+\.\s*/, '')}</li></ol>`
          }

          // Simple quote detection
          if (trimmed.startsWith('"') || trimmed.length < 150) {
            return `<blockquote class="blog-quote">${trimmed}</blockquote>`
          }

          return `<p class="blog-paragraph">${trimmed}</p>`
        })
        .filter(p => p)
        .join('')
    }

    // Basic HTML cleanup for existing HTML content
    processedContent = processedContent
      .replace(/<h[1-6]>/gi, (match) => `<h2 class="blog-heading">`)
      .replace(/<\/h[1-6]>/gi, '</h2>')
      .replace(/<p>/gi, '<p class="blog-paragraph">')
      .replace(/<ul>/gi, '<ul class="blog-list">')
      .replace(/<ol>/gi, '<ol class="blog-list">')
      .replace(/<blockquote>/gi, '<blockquote class="blog-quote">')
      .replace(/<strong>/gi, '<strong class="blog-strong">')
      .replace(/<em>/gi, '<em class="blog-emphasis">')

    return (
      <div className="blog-content">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
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
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author.fullName || blog.author.username}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getReadingTime(blog.description)}</span>
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
            {/* Featured Image */}
            {blog.images.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/10">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/images/${blog.images[0].imageUrl}`}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            )}

            {/* Article Content */}
            <Card className="border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md shadow-xl">
              <CardContent className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-6 sm:px-8 lg:px-12">
                {renderContent(blog.description)}
              </CardContent>
            </Card>

            {/* Article Footer */}
            <div className="mt-8 sm:mt-12">
              <Card className="border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 dark:from-primary/35 dark:to-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {(blog.author.fullName || blog.author.username).charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {blog.author.fullName || blog.author.username}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Author • Cybersecurity & AI Expert
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
