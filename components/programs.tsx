export function Programs() {
  const programs = [
    {
      title: "Cybersecurity Academy",
      description:
        "Master fundamental and advanced cybersecurity concepts from network security to ethical hacking through hands-on labs and certifications.",
      icon: "🔐",
    },
    {
      title: "AI & Machine Learning Track",
      description:
        "Learn how AI powers modern security systems. Build ML models for threat detection, anomaly detection, and intelligent security response.",
      icon: "🤖",
    },
    {
      title: "Leadership Development",
      description:
        "Develop leadership skills while working on real-world security challenges. Mentor others and build your professional network.",
      icon: "👥",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Programs</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive learning pathways designed to build the next generation of cybersecurity and AI leaders
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 text-2xl">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
