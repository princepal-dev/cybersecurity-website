import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, AlertTriangle, Bot, Globe, Users, Rocket, Shield, TrendingUp, Award, Sparkles, ArrowRight, CheckCircle2, Star, Briefcase, ExternalLink, Download } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* What is Young Leaders in Cybersecurity & AI Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-background to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              ABOUT US
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            What is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Young Leaders in Cybersecurity & AI</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
            <span className="font-semibold text-foreground">Young Leaders in Cybersecurity & AI (YLCA)</span> is a global program founded by high-school innovator{" "}
            <span className="font-semibold text-foreground">Arth Bhardwaj</span> to train and empower teens in{" "}
            <span className="font-semibold text-foreground">cybersecurity and artificial intelligence</span>. We provide{" "}
            <span className="font-semibold text-foreground">hands-on training</span>,{" "}
            <span className="font-semibold text-foreground">workshops</span>,{" "}
            <span className="font-semibold text-foreground">leadership opportunities</span>, and{" "}
            <span className="font-semibold text-foreground">real-world projects</span> that help young people make their schools and communities safer online.
          </p>

          {/* Additional Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <Card className="border border-border/50 dark:border-border/30 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  To empower the next generation with the knowledge and skills needed to navigate the digital world safely, ethically, and confidently. We believe every teen deserves access to quality cybersecurity and AI education, regardless of their background or location.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-border/50 dark:border-border/30 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  Global Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Our programs are designed to be accessible globally, with workshops delivered in schools and communities worldwide, all completely free of charge.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card/30 border border-border/50 dark:border-border/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-foreground">What Makes YLCA Unique</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-1">100% Free</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">All programs, workshops, and resources are completely free for students and schools.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-1">Youth-Led</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Created and run by teens, for teens, ensuring relevance and relatability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-1">Industry Mentorship</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Direct access to professionals from Elevance Systems, Microsoft, and other leading companies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground mb-1">Real-World Impact</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Students don't just learn—they lead workshops, start clubs, and create change in their communities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about">
              <Button variant="outline" className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Founder - Compact Card */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="group relative overflow-hidden border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 dark:to-primary/10 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative pb-4 text-center px-4 sm:px-6 pt-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">Meet the Founder</CardTitle>
            </CardHeader>
            
            <CardContent className="relative px-4 sm:px-6 pb-6 space-y-5">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                <span className="font-semibold text-foreground">Arth Bhardwaj</span> (California, USA) is the high-school founder of YLCA, leading student workshops and building a global ambassador network to promote teen digital safety, cybersecurity awareness, and responsible AI. He is also the author of{" "}
                <span className="font-semibold text-foreground">Cybersecurity for Teens</span> (Amazon Kindle), an Amazon Best Seller / #1 New Release in its category. Arth's community work and youth-led impact have also been featured in{" "}
                <span className="font-semibold text-foreground">The Tribune</span> (India) for YLCA's workshops and outreach across 2025.
              </p>

              {/* Featured Images - Tribune Feature & Amazon Bestseller */}
              <div className="space-y-6 pt-4">
                {/* Top Row: Tribune Newspaper Features (Vertical Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tribune Newspaper Clipping */}
                  <div className="group/img relative rounded-xl overflow-hidden border-2 border-border/60 dark:border-border/40 bg-white dark:bg-gray-100 hover:border-secondary/50 dark:hover:border-secondary/60 transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src="/paper.png"
                        alt="Featured in The Tribune India - YLCA Workshops"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="text-xs font-semibold">Featured in The Tribune (Print)</p>
                      </div>
                    </div>
                  </div>

                  {/* Featured Page from Tribune */}
                  <div className="group/img relative rounded-xl overflow-hidden border-2 border-border/60 dark:border-border/40 bg-white dark:bg-gray-100 hover:border-secondary/50 dark:hover:border-secondary/60 transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src="/WhatsApp Image 2026-01-09 at 13.20.51.jpeg"
                        alt="Tribune Page - YLCA Featured Article"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                        style={{ objectPosition: 'center 60%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="text-xs font-semibold">Tribune Article Page</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Amazon Images (Horizontal Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Amazon Bestseller */}
                  <a 
                    href="https://www.amazon.com/dp/B0FMPF2WN5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group/img relative rounded-xl overflow-hidden border-2 border-border/60 dark:border-border/40 bg-card/80 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/amazon.jpeg"
                        alt="Cybersecurity for Teens - Amazon Best Seller"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="text-xs font-semibold">Amazon Best Seller #1 - Click to View</p>
                      </div>
                    </div>
                  </a>

                  {/* Amazon Book Cover */}
                  <a 
                    href="https://www.amazon.com/dp/B0FMPF2WN5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group/img relative rounded-xl overflow-hidden border-2 border-border/60 dark:border-border/40 bg-white dark:bg-gray-50 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src="/amazon-img.png"
                        alt="Cybersecurity for Teens - Book on Amazon"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="text-xs font-semibold">Available on Amazon - Click to View</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center pt-2">
                <Link href="/about" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-5 py-2.5 text-sm rounded-full font-semibold group">
                    About Arth
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/impact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-secondary/50 dark:border-secondary/60 hover:bg-secondary/10 dark:hover:bg-secondary/20 px-5 py-2.5 text-sm rounded-full font-semibold group">
                    Impact
                    <Award className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </Link>
                <a href="https://share.google/AuVhoq0Y0yYr4BtYH" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-secondary/50 dark:border-secondary/60 hover:bg-secondary/10 dark:hover:bg-secondary/20 px-5 py-2.5 text-sm rounded-full font-semibold group">
                    Tribune Article
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </a>
                <a href="/Haryana Tribune.pdf" download="YLCA_Tribune_Feature.pdf" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-secondary/50 dark:border-secondary/60 hover:bg-secondary/10 dark:hover:bg-secondary/20 px-5 py-2.5 text-sm rounded-full font-semibold group">
                    Download Newspaper
                    <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </a>
                <a href="https://www.amazon.com/dp/B0FMPF2WN5" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 py-2.5 text-sm rounded-full font-semibold group shadow-lg shadow-primary/30 dark:shadow-primary/40">
                    Book
                    <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              OUR IMPACT
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-foreground tracking-tight px-4">
            Impact <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Snapshot</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Card className="group relative overflow-hidden text-center border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 ease-out">2500+</div>
                <CardDescription className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Students Reached</CardDescription>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden text-center border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-secondary via-secondary to-secondary/80 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 ease-out">25+</div>
                <CardDescription className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Workshops Delivered</CardDescription>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden text-center border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 ease-out">3</div>
                <CardDescription className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Corporate Partnerships</CardDescription>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden text-center border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-secondary via-secondary to-secondary/80 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 ease-out">50+</div>
                <CardDescription className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Trained Ambassadors</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/impact">
              <Button variant="outline" className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group">
                View Full Impact Report
                <Award className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              WHY IT MATTERS
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cybersecurity & AI</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/25 via-secondary/15 to-secondary/5 dark:from-secondary/35 dark:via-secondary/25 dark:to-secondary/15 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-secondary/25 dark:shadow-secondary/35 ring-2 ring-secondary/10 dark:ring-secondary/20">
                  <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Digital Risks</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">Rising threats: scams, phishing, identity theft, cyberbullying.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">Cyber attacks are increasing every year, with millions of people falling victim to online scams. Understanding cybersecurity helps protect personal information and digital identity from malicious actors.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 dark:from-primary/35 dark:via-secondary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">AI Future</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">AI is reshaping safety, creativity, and careers.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">Artificial intelligence is transforming every industry, from healthcare to education. Learning AI ethics and responsible use prepares teens for a future where AI is integrated into daily life and work.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 dark:from-primary/35 dark:via-primary/25 dark:to-primary/15 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">High-demand fields with growing opportunities and impact.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">Cybersecurity and AI professionals are in high demand, with millions of unfilled positions worldwide. These fields offer competitive salaries, job security, and the chance to make a meaningful difference in protecting digital infrastructure.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why for Teens */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              WHY FOR TEENS
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Why for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Teens</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 dark:from-primary/35 dark:via-primary/25 dark:to-primary/15 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Time Online</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">Teens spend 7+ hours online daily.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">With most of their day spent on digital devices, teens are prime targets for cyber threats. Learning cybersecurity skills helps them navigate online spaces safely and protect themselves from digital dangers.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/25 via-secondary/15 to-secondary/5 dark:from-secondary/35 dark:via-secondary/25 dark:to-secondary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-secondary/25 dark:shadow-secondary/35 ring-2 ring-secondary/10 dark:ring-secondary/20">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Early Learning</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">Building skills early sets teens up for future success.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">The teenage years are the perfect time to develop technical skills and critical thinking. Early exposure to cybersecurity and AI concepts gives teens a competitive advantage in college applications and future career paths.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-3 text-center px-4 sm:px-6 pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 dark:from-primary/35 dark:via-secondary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Leadership Skills</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 px-4 sm:px-6 pb-6 flex-1 flex flex-col text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-semibold mb-3 text-foreground">Develop confidence and leadership through real-world impact.</CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">Through YLCA's programs, teens lead workshops, mentor peers, and create positive change in their communities. These experiences build leadership skills, boost confidence, and provide valuable experience for college and career applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              OUR PROGRAMS
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tight px-4">
            What <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We Do</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Three core programs designed to empower teens with practical skills and leadership opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-4 text-center px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 dark:from-primary/35 dark:via-secondary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Global Workshops</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-center px-4 sm:px-6 pb-6">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-medium">Interactive sessions delivered in schools across the U.S., India, Guatemala, and more.</CardDescription>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-4 text-center px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/25 via-primary/20 to-secondary/10 dark:from-secondary/35 dark:via-primary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-secondary/25 dark:shadow-secondary/35 ring-2 ring-secondary/10 dark:ring-secondary/20">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Ambassador Program</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-center px-4 sm:px-6 pb-6">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-medium">We train teens to launch cybersecurity and AI clubs in their schools.</CardDescription>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative pb-4 text-center px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 dark:from-primary/35 dark:via-secondary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-xl shadow-primary/25 dark:shadow-primary/35 ring-2 ring-primary/10 dark:ring-primary/20">
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Real-World Projects</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-center px-4 sm:px-6 pb-6">
                <CardDescription className="text-sm sm:text-base leading-relaxed font-medium">Awareness campaigns, community outreach, research, and student-led events.</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/programs">
              <Button variant="outline" className="border-2 border-primary/50 dark:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold group">
                Explore All Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-foreground tracking-tight px-4">
              What <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Students Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 italic leading-relaxed font-medium">
                  "YLCA gave me the confidence to start a cybersecurity club at my school. This experience has been life-changing!"
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 dark:from-primary/35 dark:to-primary/20 flex items-center justify-center ring-2 ring-primary/20 dark:ring-primary/30 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">A</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-foreground">Ambassador</p>
                    <p className="text-xs text-muted-foreground">California, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 dark:hover:shadow-secondary/40 hover:-translate-y-3 hover:border-secondary/60 dark:hover:border-secondary/70">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 italic leading-relaxed font-medium">
                  "The workshops opened our students' eyes to real-world threats. They're now more aware and better prepared."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary/25 to-secondary/10 dark:from-secondary/35 dark:to-secondary/20 flex items-center justify-center ring-2 ring-secondary/20 dark:ring-secondary/30 flex-shrink-0">
                    <span className="text-secondary font-bold text-sm sm:text-base">T</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-foreground">Teacher</p>
                    <p className="text-xs text-muted-foreground">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 hover:-translate-y-3 hover:border-primary/60 dark:hover:border-primary/70 sm:col-span-2 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 italic leading-relaxed font-medium">
                  "Being part of YLCA's global community connected me with peers worldwide. We share ideas and support each other."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/40">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 dark:from-primary/35 dark:to-secondary/35 flex items-center justify-center ring-2 ring-primary/20 dark:ring-primary/30 flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">S</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-foreground">Student</p>
                    <p className="text-xs text-muted-foreground">Guatemala</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-lg">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
              GET STARTED
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight px-4">
            Ready to Make a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Difference</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Join thousands of teens building a safer digital future. Open to students, educators, and partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/get-involved" className="w-full sm:w-auto">
              <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 will-change-transform font-semibold group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Get Involved
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </Button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary/50 dark:border-primary/60 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 active:scale-100 hover:border-primary/70 dark:hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 will-change-transform font-semibold group"
              >
                <span className="flex items-center justify-center">
                  Explore Programs
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
