'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Users, GraduationCap, Globe, Star, ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const storiesImages = [
  "/stories/Copy of Add-Nov26-LudhianaSchool1.png",
  "/stories/Add-L6.png",
  "/stories/Add-l8.png",
  "/stories/Add-IMG-20251202-WA0012.jpg",
  "/stories/Add-IMG-20251202-WA0016.jpg",
  "/stories/Add-IMG-20251202-WA0018.jpg",
  "/stories/Add-IMG-20251202-WA0020.jpg",
  "/stories/Add-L2.png",
  "/stories/Add-L3.png",
  "/stories/Add-Ludhina1.png",
  "/stories/Add-Workshop screenshot.jpg",
  "/stories/AddL4.png",
  "/stories/Copy of Add-IMG-20251202-WA0012.jpg",
  "/stories/Screenshot 2025-12-01 215830.png",
  "/stories/WhatsApp Image 2025-12-06 at 12.52.31.jpeg",
  "/stories/WhatsApp Image 2025-12-06 at 12.54.29.jpeg",
  "/stories/WhatsApp Image 2025-12-06 at 12.56.18.jpeg",
  "/stories/WhatsApp Image 2025-12-06 at 12.56.19.jpeg",
  "/stories/WhatsApp Image 2025-12-06 at 12.56.19 (1).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.01.46.jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.02.29.jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.34 (1).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.34.jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (1).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (2).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (3).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (4).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (5).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (6).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35 (7).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.35.jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (1).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (2).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (3).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (4).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (5).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (6).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (7).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36 (8).jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.36.jpeg",
  "/new1/WhatsApp Image 2025-12-15 at 10.03.37.jpeg",
]

const decemberImages = [
  "/december/WhatsApp Image 2025-12-27 at 09.22.57.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.22.59 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.22.59.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.00.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.01.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.02 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.02.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.03 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.03.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.08.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.09 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.09.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.10.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.11 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.11.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.12 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.12.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.13 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.13.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.14 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.14.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.45.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.46 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.46.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.48 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.48.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.49 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.49.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.50.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.51.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.52.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.54 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.54.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.55 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.55.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.56 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.56.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.57.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.58 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.58.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.59 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.23.59.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.00.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.01 (1).jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.01.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.02.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.03.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.04.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.05.jpeg",
  "/december/WhatsApp Image 2025-12-27 at 09.24.07.jpeg",
]

const dpsImages = [
  "/dps/hero.png",
  "/dps/image.png",
  "/dps/WhatsApp Image 2025-12-31 at 13.29.48.jpeg",
  "/dps/WhatsApp Image 2025-12-31 at 13.29.48 (1).jpeg",
  "/dps/WhatsApp Image 2025-12-31 at 13.29.48 (2).jpeg",
  "/dps/WhatsApp Image 2025-12-31 at 13.29.48 (3).jpeg"
]

function StoriesCarousel({ onOpenModal }: { onOpenModal: (images: string[], index: number) => void }) {
  // Show only first 12 images for cleaner carousel
  const featuredImages = storiesImages.slice(0, 12);

  return (
    <div className="mb-8 sm:mb-12 md:mb-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div
                className="group relative rounded-xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => onOpenModal(featuredImages, index)}
                role="button"
                tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                onOpenModal(featuredImages, index)
                              }
                            }}
                aria-label={`View story image ${index + 1}`}
              >
                <div className="aspect-square overflow-hidden bg-muted/20">
                  <img
                    src={image}
                    alt={`YLCA Impact Story ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      View Full Gallery
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-12 bg-background/90 hover:bg-background border-border/60" />
        <CarouselNext className="hidden sm:flex -right-12 bg-background/90 hover:bg-background border-border/60" />
      </Carousel>

      {/* View All Photos Button */}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          onClick={() => onOpenModal(storiesImages, 0)}
          className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group"
        >
          View All Photos
          <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}

function ImageModal({ images, initialIndex, isOpen, onClose }: { images: string[], initialIndex: number, isOpen: boolean, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'Escape') onClose()
  }

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Prevent body scroll when modal is open - must be called before any early returns
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-5xl max-h-full flex flex-col">
        {/* Header with close button */}
        <div className="flex justify-end mb-4 sm:mb-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Image container */}
        <div className="relative flex-1 flex items-center justify-center min-h-0">
          {/* Navigation buttons - positioned better for mobile */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border border-white/20 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 touch-manipulation"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border border-white/20 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 touch-manipulation"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
            </>
          )}

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`December 2025 Outreach ${currentIndex + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
            style={{
              maxHeight: 'calc(100vh - 120px)', // Account for header and counter
              maxWidth: '100vw'
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            draggable={false}
          />
        </div>

        {/* Footer with image counter */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 sm:mt-2">
            <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Impact() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState<string[]>([])
  const [modalIndex, setModalIndex] = useState(0)

  const openModal = (images: string[], index: number) => {
    setModalImages(images)
    setModalIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR IMPACT</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                Making a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Impact</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                See how YLCA is making a difference in communities around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2000+</div>
                  <CardDescription className="font-semibold text-sm">Students Reached</CardDescription>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <GraduationCap className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-secondary via-secondary to-secondary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <CardDescription className="font-semibold text-sm">Workshops Delivered</CardDescription>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Star className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-secondary via-secondary to-secondary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <CardDescription className="font-semibold text-sm">Ambassadors</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories & Testimonials */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">SUCCESS STORIES</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                Voices from Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Community</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Real stories from ambassadors, teachers, and students who are making a difference through YLCA.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-bold">Ambassador Success</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-4 italic leading-relaxed text-sm">
                    "YLCA gave me the confidence to start a cybersecurity club. I've trained over 50 students and helped them understand digital safety. This experience has been life-changing!"
                  </CardDescription>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <Avatar className="bg-primary/10 text-primary">
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">YLCA Ambassador</p>
                      <p className="text-xs text-muted-foreground">California, USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/40 dark:hover:border-secondary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 dark:from-secondary/30 dark:to-secondary/20 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="font-bold">School Impact</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-4 italic leading-relaxed text-sm">
                    "The YLCA workshop opened our students' eyes to real-world online threats. They're now more aware and better prepared to protect themselves and their peers."
                  </CardDescription>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <Avatar className="bg-secondary/10 text-secondary">
                      <AvatarFallback>T</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">High School Teacher</p>
                      <p className="text-xs text-muted-foreground">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-bold">Global Community</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-4 italic leading-relaxed text-sm">
                    "Being part of YLCA's global community connected me with peers worldwide. We share ideas, collaborate on projects, and support each other's growth."
                  </CardDescription>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <Avatar className="bg-primary/10 text-primary">
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">YLCA Student</p>
                      <p className="text-xs text-muted-foreground">Guatemala</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery Showcase */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">PHOTO GALLERY</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                Moments That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Matter</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Capturing the energy, learning, and impact of YLCA workshops and events around the world.
              </p>
            </div>

            {/* Featured Photo Carousel */}
            <StoriesCarousel onOpenModal={openModal} />
          </div>
        </section>

        {/* Recent Highlights */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">LATEST IMPACT</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                Recent <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Our most recent initiatives and achievements in cyber safety education
              </p>
            </div>

            {/* Featured Initiative: December 2025 */}
            <div className="mb-12 sm:mb-16">
              <Card className="border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="text-xs">DECEMBER 2025</Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">In-Person Cyber Safety Outreach</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Students leading cyber safety education across schools and communities</p>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        In December 2025, YLCA students stepped beyond classrooms to deliver hands-on cybersecurity and AI awareness sessions across communities in India. Led by founder Arth Bhardwaj and Ambassador Vedika Jain, the initiative reached 500+ students across multiple Delhi government schools, focusing on everyday digital safety topics such as online scams, privacy protection, and responsible use of technology.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Arth also conducted workshops for 50+ students at boys' tennis training camps, highlighting social media and gaming account security. In addition, sessions with young factory workers and senior citizens at a community clubhouse addressed financial fraud, mobile security, and common digital risks.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                        Through these in-person efforts, YLCA demonstrated how student leadership can translate technical knowledge into meaningful, real-world impact.
                      </p>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-primary mb-1">500+</div>
                          <p className="text-xs text-muted-foreground">Students Reached</p>
                        </div>
                        <div className="bg-secondary/10 dark:bg-secondary/20 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-secondary mb-1">50+</div>
                          <p className="text-xs text-muted-foreground">Tennis Camp Students</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-foreground mb-3">Event Highlights</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          "/december/WhatsApp Image 2025-12-27 at 09.23.45.jpeg",
                          "/december/WhatsApp Image 2025-12-27 at 09.24.01.jpeg",
                          "/december/WhatsApp Image 2025-12-27 at 09.23.58.jpeg",
                          "/december/WhatsApp Image 2025-12-27 at 09.24.05.jpeg",
                          "/december/WhatsApp Image 2025-12-27 at 09.23.11.jpeg",
                          "/december/WhatsApp Image 2025-12-27 at 09.23.48.jpeg"
                        ].map((image, index) => (
                          <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-lg border border-border/30 cursor-pointer group touch-manipulation"
                            onClick={() => openModal(decemberImages, decemberImages.indexOf(image))}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                openModal(decemberImages, decemberImages.indexOf(image))
                              }
                            }}
                            aria-label={`View December 2025 image ${index + 1} in gallery`}
                          >
                            <img
                              src={image}
                              alt="December 2025 Outreach"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* View All December Photos */}
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => openModal(decemberImages, 0)}
                className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group"
              >
                View All December 2025 Photos
                <GraduationCap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Initiative: DPS Karnal */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">SCHOOL PARTNERSHIP</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                DPS Karnal Hosts Arth <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Bhardwaj</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                A full-day campus visit where YLCA's founder met Grades 9-12 students and mentored newly nominated ambassadors
              </p>
            </div>

            <div className="mb-12 sm:mb-16">
              <Card className="border-2 border-secondary/30 dark:border-secondary/40 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm overflow-hidden">
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 px-6 py-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="text-xs">DECEMBER 2025</Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">DPS Karnal Campus Visit</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Arth Bhardwaj's full-day campus visit and ambassador mentorship</p>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        On December 29, 2025, YLCA Founder Arth Bhardwaj visited Delhi Public School (DPS) Karnal, India in person to deepen YLCA's growing partnership with the school. Arth addressed students from Grades 9-12 on why cybersecurity and responsible AI matter in everyday life—and how student-led passion projects build confidence, leadership, and real community impact.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        A key highlight of the day was a focused planning session with DPS Karnal's six nominated YLCA Ambassadors, who will join the YLCA Global Ambassador Program (Jan 2026 cohort). Together, they mapped out student-led initiatives such as cyber safety awareness drives, responsible AI learning circles, digital citizenship campaigns, and peer-to-peer workshops designed to build digital trust across the school community.
                      </p>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="bg-secondary/10 dark:bg-secondary/20 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-secondary mb-1">6</div>
                          <p className="text-xs text-muted-foreground">New Ambassadors</p>
                        </div>
                        <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-primary mb-1">Grades 9-12</div>
                          <p className="text-xs text-muted-foreground">Students Engaged</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="aspect-video overflow-hidden rounded-lg border border-border/30">
                        <img
                          src="/dps/hero.png"
                          alt="Arth Bhardwaj at DPS Karnal Campus Visit"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => openModal(dpsImages, 0)}
                          loading="lazy"
                        />
                      </div>

                      <h4 className="text-lg font-bold text-foreground mb-3">Campus Visit Highlights</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "/dps/image.png",
                          "/dps/WhatsApp Image 2025-12-31 at 13.29.48.jpeg"
                        ].map((image, index) => (
                          <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-lg border border-border/30 cursor-pointer group touch-manipulation"
                            onClick={() => openModal(dpsImages, index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                openModal(dpsImages, index)
                              }
                            }}
                            aria-label={`View DPS Karnal image ${index + 1} in gallery`}
                          >
                            <img
                              src={image}
                              alt="DPS Karnal Campus Visit"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* View All DPS Photos */}
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => openModal(dpsImages, 0)}
                className="border-2 border-secondary/50 dark:border-secondary/60 hover:bg-secondary/10 dark:hover:bg-secondary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group"
              >
                View All DPS Karnal Photos
                <Users className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground px-4">
              Join the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4 max-w-2xl mx-auto">
              Be part of a global movement empowering teens with cybersecurity and AI knowledge. Your participation can create real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/get-involved">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Involved
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full font-semibold group">
                  Learn More About YLCA
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        initialIndex={modalIndex}
        isOpen={modalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  )
}

