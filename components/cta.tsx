import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-border">
        <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Lead the Future?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of young leaders building secure, intelligent systems. Apply now to start your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg rounded-full">
            Apply Now
          </Button>
          <Button
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-full bg-transparent"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  )
}
