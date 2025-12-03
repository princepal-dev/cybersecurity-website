import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Eye, Globe, GraduationCap, Rocket, Target, Network, BookOpen, FlaskConical, Building2, Briefcase, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About YLCA | Young Leaders in Cybersecurity & AI",
  description: "Learn about YLCA's vision, mission, founder Arth Bhardwaj, and our partners.",
}

export default function About() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center md:text-left">
                <Badge variant="default" className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">ABOUT US</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
                  About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">YLCA</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Empowering teens worldwide with cybersecurity and AI knowledge.
                </p>
                <Link href="/get-involved" className="inline-block">
                  <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 ease-out hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
                    <span className="relative z-10">Join Our Mission</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </Button>
                </Link>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 dark:border-border/40 shadow-2xl dark:shadow-black/40 group">
                  <img
                    src="/diverse-team-cybersecurity-leaders-working-togethe.jpg"
                    alt="YLCA Team"
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-primary/20 dark:ring-primary/30 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl shadow-xl shadow-primary/30 dark:shadow-primary/40 flex items-center justify-center">
                  <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <Card className="relative overflow-hidden border-2 border-border/50 dark:border-border/30 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative px-4 sm:px-6 pt-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                      <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="relative px-4 sm:px-6 pb-6">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      A world where every young person has the knowledge, confidence, and leadership skills to navigate the digital age safely and ethically. We build a generation of global youth who understand cybersecurity, respect responsible AI use, and lead their communities toward a safer digital future.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Globe className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold tracking-tight">Global Reach</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm">Accessible to youth worldwide, regardless of location or background.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <GraduationCap className="w-7 h-7 text-secondary" />
                      </div>
                      <CardTitle className="text-lg font-bold tracking-tight">Education First</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm">Comprehensive cybersecurity and AI literacy for all teens.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Rocket className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold tracking-tight">Future Leaders</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm">Empowering the next generation of digital safety advocates.</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR MISSION</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Our Mission</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Empowerment Through Education</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="leading-relaxed text-base">
                    Empower teens worldwide with the knowledge, skills, and confidence to navigate the digital age safely and ethically. YLCA provides hands-on cybersecurity training, AI literacy, and real-world tools to recognize threats and make informed decisions.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Network className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Global Network of Leaders</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="leading-relaxed text-base">
                    Cultivate a global network of youth leaders who take action in their schools and communities. Through our Ambassador Program, industry mentorship, and partner support, YLCA provides meaningful opportunities to teach, lead, and create positive change.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm shadow-lg">
              <CardContent className="pt-6">
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  Committed to making cybersecurity and AI education accessible to all youth, empowering students to become advocates for digital safety, champions of responsible AI, and innovators shaping a safer digital future.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="default" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">MEET THE FOUNDER</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Founder</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 dark:border-border/40 shadow-2xl dark:shadow-black/40 group">
                  <img
                    src="/young-tech-leaders-cybersecurity-ai-innovation.jpg"
                    alt="Arth Bhardwaj"
                    className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 ring-1 ring-primary/20 dark:ring-primary/30 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Arth Bhardwaj</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6">Founder & High School Innovator</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-sm sm:text-base">
                    Arth Bhardwaj is a high-school junior at Saint Francis High School in Mountain View, California, and the founder of YLCA. He leads his school's Cybersecurity & AI Club and works as a student researcher with the University of Illinois Urbana–Champaign (UIUC).
                  </p>
                  <p className="text-sm sm:text-base">
                    Arth is the author of <span className="font-semibold text-foreground">"CYBERSECURITY FOR TEENS: Protecting Yourself in the Digital World,"</span> and has delivered hands-on workshops across the United States, India, and beyond on phishing, passwords, digital footprints, and AI ethics.
                  </p>
                  <p className="text-sm sm:text-base">
                    Beyond YLCA, he drives youth-led social impact projects under the Nova Foundation and collaborates with industry mentors from Elevance Systems and Microsoft. Through research, programs, and outreach, Arth's goal is to help teens become more cyber-aware, confident with AI, and prepared to lead in a rapidly changing digital world.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <Card className="border-border/60 dark:border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="mb-3">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-sm font-semibold">Author</CardTitle>
                      <CardDescription className="text-xs">Cybersecurity Book</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="border-border/60 dark:border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="mb-3">
                        <FlaskConical className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-sm font-semibold">Researcher</CardTitle>
                      <CardDescription className="text-xs">UIUC Collaboration</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Sponsor & Partners */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">OUR PARTNERS</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">Partners & Sponsors</h2>
            </div>
            
            {/* Corporate Sponsor */}
            <Card className="mb-8 sm:mb-12 border-2 border-primary/30 dark:border-primary/40 bg-gradient-to-br from-primary/5 via-card/80 to-secondary/5 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="pt-6 px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">Elevance Systems CSR</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    YLCA partners with Elevance Systems through their CSR initiative, providing mentorship, resources, and support to empower the next generation with AI innovation and cybersecurity expertise.
                  </p>
                  <a
                    href="https://www.elevancesystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn more about Elevance Systems
                    <span>→</span>
                  </a>
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Advisors & Industry Mentors */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-8 text-center px-4">Advisors & Industry Mentors</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-10 text-center max-w-2xl mx-auto leading-relaxed px-4">
                Supported by experienced advisors and industry mentors from Elevance Systems and Microsoft, providing guidance and real-world insights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 dark:from-primary/40 dark:via-primary/30 dark:to-primary/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Elevance Systems</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base">Industry mentors providing AI innovation and cybersecurity expertise</CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 dark:hover:shadow-secondary/30 hover:-translate-y-2 hover:border-secondary/50 dark:hover:border-secondary/60 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/10 dark:from-secondary/40 dark:via-secondary/30 dark:to-secondary/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-secondary/20 dark:shadow-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Building2 className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Microsoft</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base">Technology mentors supporting youth leadership in cybersecurity</CardDescription>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center p-6 rounded-xl border border-border/50 bg-card/50">
                <p className="text-sm text-muted-foreground">
                  For more information about our advisors and mentors, visit{" "}
                  <a
                    href="https://www.elevancesystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition font-medium"
                  >
                    Elevance Systems' Young Leaders Program
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
