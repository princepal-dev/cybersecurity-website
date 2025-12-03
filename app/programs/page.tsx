import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap, Users, Globe, Laptop, Palette, UserCheck, Award, Star, FileText, Briefcase, Network, BadgeCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Programs | YLCA - Young Leaders in Cybersecurity & AI",
  description: "Explore YLCA's programs: Youth Workshops, Ambassador Program, and Certification Levels.",
}

export default function Programs() {
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
              <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR PROGRAMS</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
                YLCA <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Programs</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Three core programs empowering teens with cybersecurity and AI knowledge, leadership skills, and real-world experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <Card className="text-center border-border/60 dark:border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent mb-2">20+</div>
                  <CardDescription className="font-semibold">Workshops</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center border-border/60 dark:border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-secondary/80 bg-clip-text text-transparent mb-2">50+</div>
                  <CardDescription className="font-semibold">Ambassadors</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center border-border/60 dark:border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent mb-2">10+</div>
                  <CardDescription className="font-semibold">Countries</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Programs */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge variant="secondary" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">CORE PROGRAMS</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-4">YLCA Offers Three Core Programs</h2>
            </div>
            
            <div className="space-y-8">
              {/* Program 1: Youth Workshops */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 pt-6 px-4 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 via-secondary/25 to-primary/15 dark:from-primary/40 dark:via-secondary/35 dark:to-primary/25 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                      <Badge variant="default" className="text-xs">Program 1</Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">Youth Cyber & AI Workshops</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      Interactive 60–90 minute sessions in schools globally, featuring hands-on demos and practical cybersecurity skills.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-primary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">60–90 min sessions</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-primary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">Interactive demos</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-primary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">Real phishing examples</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-primary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">AI ethics & safety</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program 2: Ambassador Program */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm hover:border-secondary/50 dark:hover:border-secondary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 pt-6 px-4 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/30 via-primary/25 to-secondary/15 dark:from-secondary/40 dark:via-primary/35 dark:to-secondary/25 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">Program 2</Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">Ambassador Leadership Program</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      A 3-month leadership track where teens learn, practice, and lead cybersecurity and AI initiatives in their schools.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-secondary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">Cybersecurity basics</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-secondary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">AI & responsible usage</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-secondary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">Practice teaching</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 dark:bg-background/30 border border-border/40 dark:border-border/30">
                        <span className="text-secondary text-sm">✓</span>
                        <span className="text-sm text-muted-foreground">Lead 1–2 workshops</span>
                      </div>
                    </div>
                    <div className="mt-3 px-3 py-2 rounded-lg border border-primary/30 dark:border-primary/40 bg-primary/5 dark:bg-primary/10">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Bonus:</span> Start a Cyber/AI club (optional)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program 3: Global Community */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 pt-6 px-4 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 via-secondary/25 to-primary/15 dark:from-primary/40 dark:via-secondary/35 dark:to-primary/25 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                      <Badge variant="default" className="text-xs">Program 3</Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">Global Community & Events</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      Join a vibrant global network through monthly meetups, project showcases, and mentorship sessions with industry professionals.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      <div className="text-center px-4 py-3 rounded-lg border border-border/40 dark:border-border/30 bg-background/50 dark:bg-background/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-2 flex justify-center">
                          <Laptop className="w-5 h-5 text-primary" />
                        </div>
                        <p className="font-semibold text-sm text-foreground mb-1">Monthly Meetups</p>
                        <p className="text-xs text-muted-foreground">Connect globally</p>
                      </div>
                      <div className="text-center px-4 py-3 rounded-lg border border-border/40 dark:border-border/30 bg-background/50 dark:bg-background/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-2 flex justify-center">
                          <Palette className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-semibold text-sm text-foreground mb-1">Project Showcases</p>
                        <p className="text-xs text-muted-foreground">Share innovations</p>
                      </div>
                      <div className="text-center px-4 py-3 rounded-lg border border-border/40 dark:border-border/30 bg-background/50 dark:bg-background/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-2 flex justify-center">
                          <UserCheck className="w-5 h-5 text-primary" />
                        </div>
                        <p className="font-semibold text-sm text-foreground mb-1">Mentorship</p>
                        <p className="text-xs text-muted-foreground">Learn from experts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ambassador Roles & Benefits */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">Ambassador Roles & Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Responsibilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ambassador Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Attend YLCA training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Lead or co-lead at least one workshop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Promote digital safety at school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Organize cybersecurity week, posters, AI awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Represent YLCA at events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Build a safer online culture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ambassador Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Official Ambassador Badge (digital + printable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Recommendation letter (based on involvement)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Leadership experience for college apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Priority for Nova Foundation internships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Mentorship from industry experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Network className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Global ambassador network</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certification Levels */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">Certification & Levels</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Level 1 */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-secondary/25 to-primary/15 dark:from-primary/40 dark:via-secondary/35 dark:to-primary/25 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <BadgeCheck className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-bold tracking-tight">Level 1 — Cyber Safety Leader</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    Basics of passwords, phishing, scams, privacy, AI misuse.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Level 2 */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 via-primary/25 to-secondary/15 dark:from-secondary/40 dark:via-primary/35 dark:to-secondary/25 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="font-bold tracking-tight">Level 2 — Cyber & AI Ambassador</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    Runs 1–2 workshops at school.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Level 3 */}
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-secondary/25 to-primary/15 dark:from-primary/40 dark:via-secondary/35 dark:to-primary/25 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Star className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-bold tracking-tight">Level 3 — Youth Trainer</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm">
                    Trains other ambassadors; co-hosts global YLCA events.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Special Recognition */}
            <Card className="mt-8 border-2 border-primary/50 dark:border-primary/60 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3">Special Recognition</CardTitle>
                  <CardDescription className="text-lg">
                    Awarded to students with exceptional outreach or innovation.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who can join YLCA?</AccordionTrigger>
                <AccordionContent>
                  Any student ages 12–18 interested in cybersecurity or AI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does it cost money?</AccordionTrigger>
                <AccordionContent>
                  No. YLCA is a free youth-led initiative under Nova Foundation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need technical experience?</AccordionTrigger>
                <AccordionContent>
                  No experience needed—just motivation to learn and lead.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can international students join?</AccordionTrigger>
                <AccordionContent>
                  Yes! YLCA is global.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do ambassadors receive a certificate?</AccordionTrigger>
                <AccordionContent>
                  Yes, after completing training and workshop leadership.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can teachers request workshops?</AccordionTrigger>
                <AccordionContent>
                  Absolutely—schools can request free sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground px-4">Ready to Start Your Journey?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Join YLCA today and become part of a global community of young cybersecurity and AI leaders.
            </p>
            <Link href="/get-involved" className="inline-block px-4">
              <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
                <span className="relative z-10">Get Involved</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

