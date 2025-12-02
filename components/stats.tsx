export function Stats() {
  const stats = [
    { label: "Organizations Protected", value: "5,000+" },
    { label: "Threats Blocked Daily", value: "2M+" },
    { label: "Average Response Time", value: "< 60 seconds" },
    { label: "Uptime SLA", value: "99.99%" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
