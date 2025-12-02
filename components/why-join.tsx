export function WhyJoin() {
  const benefits = [
    {
      title: "Industry Mentorship",
      description: "Learn directly from cybersecurity and AI experts working at leading tech companies",
    },
    { title: "Real Projects", description: "Build portfolio-worthy projects that solve actual security challenges" },
    {
      title: "Certifications",
      description: "Earn recognized credentials like CompTIA Security+, CEH, and AWS certifications",
    },
    { title: "Career Support", description: "Job placement assistance and connections to leading cybersecurity firms" },
    { title: "Global Network", description: "Connect with peers and leaders building the future of cybersecurity" },
    {
      title: "Continuous Learning",
      description: "Stay updated with the latest threats, technologies, and AI breakthroughs",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Why Join CyberLeaders?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get everything you need to become a trusted leader in cybersecurity and AI
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-background/50 border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
