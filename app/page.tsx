import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Shield, Users, Newspaper, Sparkles, BookOpen } from "lucide-react"

const recognitionItems = [
  { title: "Schools", subtitle: "Workshop host recognition" },
  { title: "Communities", subtitle: "Youth digital safety initiatives" },
  { title: "Partners", subtitle: "Industry mentorship support" },
]

const featuredItems = [
  {
    title: "The Tribune Feature",
    description: "YLCA youth-led workshops and outreach recognized in print and online coverage.",
    href: "https://share.google/AuVhoq0Y0yYr4BtYH",
  },
  {
    title: "Cybersecurity for Teens",
    description: "Amazon bestselling youth cybersecurity resource authored by YLCA founder.",
    href: "https://www.amazon.com/dp/B0FMPF2WN5",
  },
  {
    title: "Student Impact Stories",
    description: "Ambassadors leading clubs, workshops, and peer awareness campaigns globally.",
    href: "/impact",
  },
]

const missionPillars = [
  {
    title: "Intergenerational Leadership",
    description: "Students lead practical sessions that strengthen digital safety habits in schools and communities.",
    icon: Users,
  },
  {
    title: "Cybersecurity and AI Education",
    description: "Hands-on learning focused on phishing awareness, privacy, secure behavior, and responsible AI use.",
    icon: Shield,
  },
  {
    title: "Global Access",
    description: "Free and scalable programs that help learners anywhere build confidence in the digital world.",
    icon: Globe,
  },
]

const impactStats = [
  { value: "2,500+", label: "Students Reached" },
  { value: "25", label: "Schools Reached" },
  { value: "60+", label: "Student Ambassadors" },
  { value: "3", label: "Corporate Partnerships" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <Badge className="mb-5 bg-primary/10 text-primary hover:bg-primary/15 border border-primary/20">
                <Sparkles className="w-3 h-3 mr-2" />
                Empowering Teens in Cybersecurity and AI
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Building a Safer Digital Future, One Student at a Time
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Young Leaders in Cybersecurity and AI (YLCA) is a student-led initiative helping teens build real
                cybersecurity and AI literacy through workshops, leadership opportunities, and practical community impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">
                    Explore Our Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/get-involved" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm">
              <img
                src="/home.jpeg"
                alt="YLCA students participating in a cybersecurity workshop"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/60">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em] text-muted-foreground mb-7 px-2">
              Officially Recognized Through
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {recognitionItems.map((item) => (
                <Card key={item.title} className="bg-background">
                  <CardContent className="pt-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">As Featured In and Backed By Community Impact</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {featuredItems.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href} className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                      >
                        Open source
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                We make cybersecurity and AI learning practical, accessible, and youth-led so students can create safer digital communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {missionPillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <Card key={pillar.title} className="h-full">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Impact</h2>
              <p className="text-muted-foreground mt-3">Together, students are driving measurable digital safety awareness.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactStats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Recognized for Youth Cybersecurity &amp; AI Leadership</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                YLCA.tech&apos;s founder was honored by the City of Modesto for expanding student-led cybersecurity and AI education beyond Silicon Valley.
              </p>
            </div>

            <Card>
              <CardContent className="pt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="rounded-2xl overflow-hidden border border-border/60 bg-background shadow-sm">
                      <img
                        src="/mayor.jpeg"
                        alt="Arth Bhardwaj with Modesto Mayor Sue Zwahlen holding the recognition certificate"
                        className="w-full h-full object-cover aspect-[4/5]"
                      />
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      City of Modesto Recognition • Central Valley Outreach • Youth-Led Cybersecurity &amp; AI Education
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">City Recognition</h3>
                    <p className="mt-2 text-base font-medium text-foreground">
                      Certificate of Recognition from the City of Modesto
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Presented April 6, 2026</p>
                    <p className="mt-5 text-muted-foreground leading-relaxed">
                      YLCA.tech Founder Arth Bhardwaj received a Certificate of Recognition from the City of Modesto for
                      his work in youth cybersecurity and AI education. The recognition highlights Arth&apos;s leadership as
                      Founder of YLCA.tech and Leader of the Cybersecurity &amp; AI Club at Saint Francis High School.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      This milestone reflects YLCA&apos;s growing effort to bring practical cyber safety, scam awareness, and
                      responsible AI education to students across Central Valley communities, including Modesto, Tracy,
                      Lathrop, Mountain House, and nearby cities.
                    </p>
                    <div className="mt-6">
                      <a href="/Mayor-reconition-YLCA-Arth.pdf" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                        <Button className="w-full sm:w-auto">
                          View Certificate
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet Our Founder</h2>
            </div>

            <Card>
              <CardContent className="pt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Arth Bhardwaj</span> is the student founder of YLCA,
                      building a global youth movement around cybersecurity awareness and responsible AI. Through workshops,
                      ambassador leadership, and community action, he helps students turn digital safety knowledge into
                      real-world impact.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                      <Link href="/about" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto">
                          About Arth
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/impact" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                          Impact
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <a href="https://share.google/AuVhoq0Y0yYr4BtYH" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                          Tribune Article
                          <Newspaper className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                      <a href="/Haryana Tribune.pdf" download="YLCA_Tribune_Feature.pdf" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                          Download Newspaper
                          <Newspaper className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                      <a href="https://www.amazon.com/dp/B0FMPF2WN5" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto">
                          View Book
                          <BookOpen className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl overflow-hidden border border-border/60 bg-background">
                      <img
                        src="/paper.png"
                        alt="YLCA founder featured in The Tribune"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border/60 bg-background">
                      <img
                        src="/WhatsApp Image 2026-01-09 at 13.20.51.jpeg"
                        alt="Tribune article page featuring YLCA"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                    </div>
                    <a
                      href="https://share.google/AuVhoq0Y0yYr4BtYH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl overflow-hidden border border-border/60 bg-background block"
                    >
                      <img
                        src="/tribune.png"
                        alt="YLCA featured in The Tribune online"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                    </a>
                    <div className="rounded-xl overflow-hidden border border-border/60 bg-background">
                      <img
                        src="/amazon-img.png"
                        alt="Cybersecurity for Teens book cover"
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary/[0.04] border-y border-border/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Make a Difference?</h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              Join YLCA as a student volunteer, partner school, or supporter and help shape a safer digital future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-involved" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Join YLCA
                  <Users className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  Our Story
                  <BookOpen className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://share.google/AuVhoq0Y0yYr4BtYH" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  Tribune Coverage
                  <Newspaper className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
