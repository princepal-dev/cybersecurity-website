import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About CyberLeaders | Developing Next-Gen Cybersecurity Leaders",
  description: "Learn about CyberLeaders' mission to develop young leaders in cybersecurity and AI.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">About CyberLeaders</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2022, CyberLeaders is a mission-driven organization dedicated to developing the next generation
              of leaders in cybersecurity and artificial intelligence.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                CyberLeaders was born from a simple observation: the cybersecurity industry faces a critical talent
                shortage, and young professionals often lack access to quality education and mentorship needed to launch
                their careers.
              </p>
              <p>
                We recognized that combining cybersecurity expertise with artificial intelligence knowledge creates
                uniquely qualified leaders who can solve tomorrow's security challenges. Our founders, experienced
                leaders in both fields, created a platform that bridges the gap between education and industry.
              </p>
              <p>
                Today, we're proud to have supported hundreds of young professionals in launching successful careers
                while helping organizations build stronger, more diverse security teams.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">🎓 Excellence</h3>
                <p className="text-muted-foreground">We commit to the highest standards of education and mentorship.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">🤝 Inclusion</h3>
                <p className="text-muted-foreground">
                  We believe cybersecurity needs diverse perspectives and backgrounds.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">🔒 Integrity</h3>
                <p className="text-muted-foreground">
                  We prioritize ethical practices and responsible technology development.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">🚀 Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and creative approaches to security challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Leaders Trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <p className="text-muted-foreground">Placement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Corporate Partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">30+</div>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
