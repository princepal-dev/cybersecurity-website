import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <Badge variant="default" className="mb-6 sm:mb-8 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 dark:border-primary/40 backdrop-blur-sm shadow-md shadow-primary/10 dark:shadow-primary/20 text-[10px] sm:text-xs font-semibold hover:scale-105 transition-transform duration-300 max-w-[90%] sm:max-w-none mx-auto">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2 inline animate-pulse flex-shrink-0" />
          <span className="whitespace-normal text-center leading-tight">Empowering Teens to Secure the Digital World</span>
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-foreground text-balance leading-[1.1] tracking-tight px-4">
          Young Leaders in{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Cybersecurity & AI
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 text-balance max-w-3xl mx-auto leading-relaxed font-normal px-4">
          A global youth-led initiative{" "}
          <span className="font-semibold text-foreground">empowering</span> the next generation of{" "}
          <span className="font-semibold text-foreground">cybersecurity and AI leaders</span> through{" "}
          <span className="font-semibold text-foreground">hands-on workshops</span> and{" "}
          <span className="font-semibold text-foreground">mentorship from industry experts</span> to build a safer, more responsible digital future.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <Link href="/get-involved" className="w-full sm:w-auto">
            <Button className="relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full shadow-lg shadow-primary/30 dark:shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-100 font-semibold group overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Join YLCA
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </Button>
          </Link>
          <Link href="/programs" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/50 dark:border-primary/60 text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-100 hover:border-primary/70 dark:hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 font-semibold group"
            >
              <span className="flex items-center justify-center">
                Explore Programs
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-8 sm:mt-12 max-w-6xl mx-auto animate-slide-up px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 dark:border-border/40 bg-gradient-to-br from-card to-card/50 p-0.5 sm:p-1 shadow-2xl dark:shadow-black/40 transition-all duration-500 ease-out hover:shadow-3xl dark:hover:shadow-black/60 group">
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="/img-1.jpeg"
              alt="Young Leaders in Cybersecurity and AI"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none rounded-xl sm:rounded-2xl transition-opacity duration-500"></div>
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-primary/20 dark:ring-primary/30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
