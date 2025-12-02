export function Services() {
  const services = [
    {
      title: "Threat Detection",
      description: "AI-powered real-time monitoring to identify threats before they impact your systems",
    },
    {
      title: "Incident Response",
      description: "Automated response protocols and expert incident management when threats are detected",
    },
    {
      title: "Compliance Management",
      description: "Stay compliant with HIPAA, GDPR, PCI-DSS, and other regulatory requirements",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Core Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive security solutions designed for modern enterprises
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 text-2xl">
                {["🔍", "⚡", "✓"][idx]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
