export function Mission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/team-of-cybersecurity-experts-in-modern-office.jpg" alt="CyberGuard Team" className="w-full rounded-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Recognized Leader in Cybersecurity</h2>
            <p className="text-lg text-muted-foreground mb-4">
              CyberGuard has been recognized by leading industry organizations for our innovative security solutions and
              commitment to protecting enterprises worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of expert security researchers and engineers works around the clock to stay ahead of emerging
              threats and deliver cutting-edge protection for our clients.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <span className="text-foreground">Gartner Magic Quadrant Leader</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-foreground">ISO 27001 & SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔐</span>
                <span className="text-foreground">Zero Breach Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
