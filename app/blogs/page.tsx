"use client"

import { useState, useEffect } from "react"
import "./blog-listing.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, User, ArrowRight, FileText, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Blog {
  blogId: number
  title: string
  pdfPath: string
  authorName?: string
  authorImage?: string
  authorTitle?: string
  createdAt: string
  updatedAt: string
  featuredImage?: string
  category: string
  readingTime: string
}

interface BlogResponseDTO {
  blogId: number
  title: string
  pdfPath?: string
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
const getFallbackImage = (category: string) => {
  const categoryImages: Record<string, string> = {
    'AI & ML': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    'Cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
    'Education': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center',
    'Careers': 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop&crop=center',
    'Research': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center',
    'Insights': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center'
  }

  return categoryImages[category] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center'
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/public/blogs`)

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`)
        }

        const rawData = await response.json()

        // Ensure data is an array
        if (!Array.isArray(rawData)) {
          throw new Error('Invalid API response: expected array')
        }

        const data: BlogResponseDTO[] = rawData

        // Transform the data to match our Blog interface with comprehensive error handling
        const transformedBlogs: Blog[] = data
          .filter(blog => blog && typeof blog === 'object' && blog.blogId) // Filter out invalid blog entries
          .map(blog => {
            try {
              return {
                blogId: (typeof blog.blogId === 'number') ? blog.blogId : 0,
                title: (blog.title && typeof blog.title === 'string') ? blog.title : 'Untitled Blog',
                pdfPath: (blog.pdfPath && typeof blog.pdfPath === 'string') ? blog.pdfPath : '',
                authorName: (blog.authorName && typeof blog.authorName === 'string')
                  ? blog.authorName
                  : (blog.author && typeof blog.author === 'object' &&
                     blog.author.fullName && typeof blog.author.fullName === 'string')
                    ? blog.author.fullName
                    : (blog.author && typeof blog.author === 'object' &&
                       blog.author.username && typeof blog.author.username === 'string')
                      ? blog.author.username
                      : 'Unknown Author',
                authorImage: (blog.authorImage && typeof blog.authorImage === 'string') ? blog.authorImage : '',
                authorTitle: (blog.authorTitle && typeof blog.authorTitle === 'string') ? blog.authorTitle : '',
                createdAt: (blog.createdAt && typeof blog.createdAt === 'string') ? blog.createdAt : new Date().toISOString(),
                updatedAt: (blog.updatedAt && typeof blog.updatedAt === 'string') ? blog.updatedAt : new Date().toISOString(),
                featuredImage: undefined, // No blog images - always use fallback
                category: getBlogCategory((blog.title && typeof blog.title === 'string') ? blog.title : ''),
                readingTime: 'PDF Document'
              }
            } catch (transformError) {
              return {
                blogId: 0,
                title: 'Error Loading Blog',
                pdfPath: '',
                authorName: 'Unknown Author',
                authorImage: '',
                authorTitle: '',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                featuredImage: undefined,
                category: 'Insights',
                readingTime: 'PDF Document'
              }
            }
          })

        setBlogs(transformedBlogs)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blogs')
        setBlogs([]) // Set empty array on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

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

  const getBlogDescription = (blog: Blog) => {
    // Since we don't have descriptions anymore, show PDF info
    return `PDF Document by ${blog.authorName}${blog.authorTitle ? ` - ${blog.authorTitle}` : ''}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-secondary/5 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              BLOGS & INSIGHTS
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Explore <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">Cybersecurity & AI</span> Insights
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Dive into cutting-edge articles, research papers, and expert perspectives from our community of young cybersecurity and AI leaders shaping the future.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{blogs.length}+</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert</div>
              <div className="text-sm text-muted-foreground">Content</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Free</div>
              <div className="text-sm text-muted-foreground">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {error && (
            <Card className="mb-8 border-destructive/50 bg-destructive/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-destructive mb-2">Unable to Load Blogs</h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="border-destructive/50 hover:bg-destructive/10"
                  >
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden border border-border bg-card loading-skeleton">
                  <div className="aspect-[16/10] bg-muted rounded-t-lg"></div>
                  <CardContent className="p-5">
                    <div className="h-5 bg-muted rounded mb-2 w-20"></div>
                    <div className="h-6 bg-muted rounded mb-2 w-4/5"></div>
                    <div className="h-4 bg-muted rounded mb-3 w-full"></div>
                    <div className="h-4 bg-muted rounded mb-3 w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-muted rounded w-16"></div>
                      <div className="h-4 bg-muted rounded w-12"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* All Blogs Grid */}
          {!isLoading && !error && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {blogs.map((blog, index) => (
                <Link key={blog.blogId} href={`/blogs/${blog.blogId}`}>
                  <Card className="group cursor-pointer blog-card h-full hover:shadow-2xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-primary/5 dark:to-primary/10 overflow-hidden relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Decorative Element */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                    
                    <CardContent className="p-6 relative z-10">
                      {/* Category Badge with Icon */}
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs blog-badge bg-primary/10 border-primary/30 text-primary font-semibold px-3 py-1">
                          {blog.category}
                        </Badge>
                        <div className="ml-auto">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Title with gradient on hover */}
                      <CardTitle className="text-xl font-bold line-clamp-2 leading-tight blog-title mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {blog.title}
                      </CardTitle>

                      {/* Description */}
                      <CardDescription className="text-sm leading-relaxed line-clamp-3 text-muted-foreground mb-6 min-h-[60px]">
                        {getBlogDescription(blog)}
                      </CardDescription>

                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />

                      {/* Author and Meta Info */}
                      <div className="flex flex-col gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-semibold text-foreground">{blog.authorName}</span>
                        </div>
                        <div className="flex items-center justify-between text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary/70" />
                            <span>{formatDate(blog.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-1 rounded-full">
                            <FileText className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-medium">PDF</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && blogs.length === 0 && (
            <Card className="text-center py-20 border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
              <CardContent className="px-8">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  We're working on amazing cybersecurity and AI insights. Check back soon for our latest articles and expert perspectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    <Eye className="w-4 h-4 mr-2" />
                    Stay Updated
                  </Button>
                  <Link href="/get-involved">
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <FileText className="w-4 h-4 mr-2" />
                      Contribute Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              CONTRIBUTE
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Share Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Knowledge</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Have insights to share? Join our community of young cybersecurity and AI leaders by contributing articles and research.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/get-involved">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 will-change-transform font-semibold group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-2 border-primary/50 dark:border-primary/60 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-100 hover:border-primary/70 dark:hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 will-change-transform font-semibold"
              onClick={() => window.open('mailto:contact@ylca.org', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
