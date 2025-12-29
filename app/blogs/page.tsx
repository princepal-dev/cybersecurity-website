"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, User, ArrowRight, FileText, Clock, Eye } from "lucide-react"
import Link from "next/link"

interface Blog {
  blogId: number
  title: string
  description: string
  authorName?: string
  createdAt: string
  updatedAt: string
}

interface BlogResponseDTO {
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

        const data: BlogResponseDTO[] = await response.json()

        // Transform the data to match our Blog interface
        const transformedBlogs: Blog[] = data.map(blog => ({
          blogId: blog.blogId,
          title: blog.title,
          description: blog.description,
          authorName: blog.author.fullName || blog.author.username,
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt
        }))

        setBlogs(transformedBlogs)
        setError(null)
      } catch (err) {
        console.error('Error fetching blogs:', err)
        setError(err instanceof Error ? err.message : 'Failed to load blogs')
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

  const truncateDescription = (description: string, maxLength: number = 200) => {
    // Strip HTML tags first
    const textContent = description.replace(/<[^>]*>/g, '')
    if (textContent.length <= maxLength) return textContent

    // Find the last complete word within the limit
    const truncated = textContent.substring(0, maxLength)
    const lastSpaceIndex = truncated.lastIndexOf(' ')

    return lastSpaceIndex > 0
      ? truncated.substring(0, lastSpaceIndex) + '...'
      : truncated + '...'
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-background to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              BLOGS
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Insights on <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cybersecurity & AI</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Stay informed with the latest articles, research, and perspectives from our community of young cybersecurity and AI leaders.
          </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md">
                  <div className="aspect-video bg-muted animate-pulse"></div>
                  <CardHeader className="pb-3">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex items-center gap-4 mt-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Blogs Grid */}
          {!isLoading && !error && (
            <>
              {blogs.length === 0 ? (
                <Card className="text-center py-16 border-dashed">
                  <CardContent>
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Blogs Yet</h3>
                    <p className="text-muted-foreground mb-6">Check back soon for our latest articles and insights.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {blogs.map((blog) => (
                    <Card
                      key={blog.blogId}
                      className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Featured Image Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Eye className="w-4 h-4" />
                            <span>Featured Article</span>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="relative pb-3">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <CardTitle className="text-lg sm:text-xl font-bold tracking-tight line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                            {blog.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          {truncateDescription(blog.description)}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative pt-0">
                        <Separator className="mb-4" />

                        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{blog.authorName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(blog.createdAt)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadingTime(blog.description)}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/40">
                          <Link href={`/blogs/${blog.blogId}`}>
                            <Button
                              variant="ghost"
                              className="w-full group/btn hover:bg-primary/10 dark:hover:bg-primary/20 text-primary hover:text-primary/90 p-0 h-auto justify-start"
                            >
                              <span className="flex items-center gap-2 text-sm font-medium">
                                Read Full Article
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
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
