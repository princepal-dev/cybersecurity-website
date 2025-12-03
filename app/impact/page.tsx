import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, GraduationCap, Globe, Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Impact | YLCA - Young Leaders in Cybersecurity & AI",
  description: "See YLCA's global reach, success stories, and partnerships.",
}

export default function Impact() {
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
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
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
              <Card className="group relative overflow-hidden text-center border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative pt-6">
                  <div className="mb-3 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <CardDescription className="font-semibold text-sm">Countries</CardDescription>
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

        {/* Global Reach */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-foreground px-4">Global Reach</h2>
            
            <div className="p-4 sm:p-6 md:p-8 rounded-xl border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6 text-center">Countries We've Reached</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">United States</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">India</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">Guatemala</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">Canada</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">United Kingdom</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">Australia</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/50">And more...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stories & Photos */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">SUCCESS STORIES</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">Stories & Photos</h2>
            </div>
            
            {/* Photo Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
              <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/young-tech-leaders-cybersecurity-ai-innovation.jpg"
                    alt="Young leaders in cybersecurity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">Young Leaders Workshop</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/diverse-team-cybersecurity-leaders-working-togethe.jpg"
                    alt="Diverse team working together"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">Team Collaboration</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/team-of-cybersecurity-experts-in-modern-office.jpg"
                    alt="Team of cybersecurity experts"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">Expert Mentorship</p>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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

        {/* Partnerships */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-foreground px-4">Partnerships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold">Elevance Systems</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="mb-4 text-sm">
                    Primary corporate sponsor supporting YLCA through CSR, providing mentorship, resources, and opportunities.
                  </CardDescription>
                  <a
                    href="https://www.elevancesystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition font-medium text-sm"
                  >
                    Learn more →
                  </a>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/40 dark:hover:border-secondary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold">Nova Foundation</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    YLCA operates under Nova Foundation, supporting youth-led social impact projects and educational programs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold">UIUC</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    Research partnerships advancing cybersecurity and AI education for youth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/40 dark:hover:border-secondary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold">Microsoft</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    Industry mentors providing guidance and support to develop leadership skills and technical expertise.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-card/30 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground px-4">Be Part of Our Impact</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Join YLCA and help us reach even more students around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/get-involved" className="w-full sm:w-auto">
                <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
                  <span className="relative z-10">Get Involved</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </Button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary/50 dark:border-primary/60 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 active:scale-100 hover:border-primary/70 dark:hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 font-semibold"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

