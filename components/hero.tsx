import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-primary text-sm font-medium">The Next Generation of Cyber Leaders</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-balance leading-tight">
          Shape the Future of Cybersecurity & AI
        </h1>

        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Join a community of young leaders dedicated to building secure, intelligent systems. Learn from industry
          experts, collaborate on real-world projects, and launch your career in cybersecurity and artificial
          intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg rounded-full">
            Apply for Programs
          </Button>
          <Button
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-full bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-1">
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-card to-secondary/20 rounded-xl flex items-center justify-center">
            <img
              src="/young-tech-leaders-cybersecurity-ai-innovation.jpg"
              alt="Young Leaders in Cybersecurity and AI"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
