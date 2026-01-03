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
import { BookOpen, Calendar, User, ArrowRight, FileText, Clock, Eye, Star, TrendingUp, Award, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Blog {
  blogId: number
  title: string
  description: string
  authorName?: string
  createdAt: string
  updatedAt: string
  featuredImage?: string
  category: string
  readingTime: string
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
          updatedAt: blog.updatedAt,
          featuredImage: blog.images.length > 0 ? blog.images[0].imageUrl : undefined,
          category: getBlogCategory(blog.title, blog.description),
          readingTime: getReadingTime(blog.description)
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

  const getBlogCategory = (title: string, description: string): string => {
    const content = (title + ' ' + description).toLowerCase()

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden border border-border/60 dark:border-border/40 bg-gradient-to-br from-card/90 to-card/95 backdrop-blur-sm animate-pulse">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted via-muted/80 to-muted rounded-t-lg"></div>
                  <CardHeader className="pb-4 px-6 pt-6">
                    <div className="h-6 bg-muted rounded mb-3 w-4/5"></div>
                    <div className="h-4 bg-muted rounded mb-2 w-full"></div>
                    <div className="h-4 bg-muted rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent className="pt-0 px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full"></div>
                        <div className="flex flex-col gap-1">
                          <div className="h-4 bg-muted rounded w-20"></div>
                          <div className="h-3 bg-muted rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-12 bg-muted rounded-lg"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Featured Blog */}
          {!isLoading && !error && blogs.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-16">
                <Card className="lg:col-span-2 group relative overflow-hidden border-2 border-primary/20 dark:border-primary/30 bg-gradient-to-br from-card via-card/98 to-card/95 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer featured-blog-card blog-card-hover professional-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Featured Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {blogs[0].featuredImage ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/images/${blogs[0].featuredImage}`}
                        alt={blogs[0].title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/8 dark:from-primary/25 dark:via-secondary/25 dark:to-primary/15 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <Star className="w-20 h-20 text-primary/40" />
                          <span className="text-primary/60 font-semibold text-sm">Featured Article</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Premium Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-xl px-3 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          PREMIUM
                        </Badge>
                        <Badge variant="secondary" className="bg-white/95 text-black hover:bg-white border-0 shadow-lg backdrop-blur-sm">
                          {blogs[0].category}
                        </Badge>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 line-clamp-2 leading-tight drop-shadow-2xl">
                        {blogs[0].title}
                      </h3>
                      <p className="text-white/95 text-base sm:text-lg line-clamp-2 mb-6 drop-shadow-lg leading-relaxed">
                        {truncateDescription(blogs[0].description.replace(/<[^>]*>/g, ''), 180)}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm drop-shadow-lg">
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{blogs[0].authorName}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(blogs[0].createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                          <Clock className="w-4 h-4" />
                          <span>{blogs[0].readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="p-8">
                    <Link href={`/blogs/${blogs[0].blogId}`}>
                      <Button className="w-full bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/95 hover:to-secondary/90 text-white font-semibold py-4 text-lg group shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                        <span className="flex items-center justify-center gap-3">
                          <Zap className="w-5 h-5" />
                          Read Full Article
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* Recent Blogs Sidebar */}
                <div className="space-y-6 recent-blogs-container">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-secondary to-primary rounded-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">Recent Articles</h3>
                  </div>

                  <div className="space-y-4">
                    {blogs.slice(1, 4).map((blog, index) => (
                      <Link key={blog.blogId} href={`/blogs/${blog.blogId}`}>
                        <Card className="group relative overflow-hidden border border-border/60 dark:border-border/40 bg-gradient-to-r from-card via-card/98 to-card/95 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:scale-[1.02] hover:border-secondary/60 dark:hover:border-secondary/70 cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                          <CardContent className="p-5">
                            <div className="flex gap-4">
                              {/* Thumbnail */}
                              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/15 to-secondary/10 relative group-hover:shadow-lg transition-shadow duration-300">
                                {blog.featuredImage ? (
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/images/${blog.featuredImage}`}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none'
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Award className="w-8 h-8 text-secondary/60" />
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-3">
                                  <Badge variant="outline" className="text-xs px-2 py-1 border-secondary/60 text-secondary bg-secondary/5 hover:bg-secondary/10">
                                    {blog.category}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground font-medium">
                                    {formatDate(blog.createdAt)}
                                  </span>
                                </div>
                                <h4 className="font-bold text-base sm:text-lg line-clamp-2 mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight">
                                  {blog.title}
                                </h4>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5" />
                                    <span className="truncate max-w-[80px] font-medium">{blog.authorName}</span>
                                  </div>
                                  <span className="text-muted-foreground/60">•</span>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span className="font-medium">{blog.readingTime}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="pt-4 border-t border-border/50">
                    <Link href="#all-blogs">
                      <Button variant="ghost" className="w-full justify-center text-secondary hover:text-secondary/80 hover:bg-secondary/5 group">
                        <span className="font-medium">View All Articles</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Blogs Grid */}
          {!isLoading && !error && blogs.length > 0 && (
            <div id="all-blogs" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
              {blogs.slice(1).map((blog, index) => (
                <Card
                  key={blog.blogId}
                  className="group relative overflow-hidden border border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card/98 to-card/95 backdrop-blur-sm transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/35 hover:-translate-y-4 hover:scale-[1.03] hover:border-primary/60 dark:hover:border-primary/70 cursor-pointer blog-grid-card blog-card-hover professional-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Blog Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    {blog.featuredImage ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/images/${blog.featuredImage}`}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/12 via-secondary/12 to-primary/6 dark:from-primary/22 dark:via-secondary/22 dark:to-primary/12 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-30"></div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <BookOpen className="w-16 h-16 text-primary/50" />
                          <span className="text-primary/60 font-medium text-sm">Article</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/95 text-black hover:bg-white border-0 shadow-lg backdrop-blur-sm px-3 py-1">
                        {blog.category}
                      </Badge>
                    </div>

                    {/* Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white border-0 shadow-lg backdrop-blur-sm px-2 py-1 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {blog.readingTime}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="relative pb-4 px-6 pt-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300 mb-3">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {truncateDescription(blog.description.replace(/<[^>]*>/g, ''), 140)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative pt-0 px-6 pb-6">
                    <Separator className="mb-6 bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-foreground truncate max-w-[100px] sm:max-w-[120px]">
                            {blog.authorName}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(blog.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/blogs/${blog.blogId}`}>
                      <Button className="w-full bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 text-primary hover:text-primary/90 border border-primary/20 hover:border-primary/40 group/btn transition-all duration-300 py-3">
                        <span className="flex items-center justify-center gap-2 font-semibold">
                          <FileText className="w-4 h-4" />
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
