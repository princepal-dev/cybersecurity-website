export function Features() {
  const features = [
    {
      title: "Real-Time Threat Intelligence",
      description: "Access to global threat feeds and intelligence data",
    },
    {
      title: "Automated Response",
      description: "Orchestrated automated responses to common attack patterns",
    },
    {
      title: "Cloud-Native Security",
      description: "Secure your multi-cloud environments with unified protection",
    },
    {
      title: "Advanced Analytics",
      description: "Machine learning-powered anomaly detection and behavior analysis",
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive protection across all devices and endpoints",
    },
    {
      title: "24/7 Expert Support",
      description: "Around-the-clock security operations and expert guidance",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Why Choose CyberGuard</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Enterprise-grade security with industry-leading capabilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-border bg-background/50">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
