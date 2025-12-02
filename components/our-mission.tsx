export function OurMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/diverse-team-cybersecurity-leaders-working-togethe.jpg" alt="CyberLeaders Community" className="w-full rounded-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We believe the future of cybersecurity and AI depends on developing diverse, talented leaders who are
              passionate about building secure systems and responsible AI.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              CyberLeaders provides the education, mentorship, and opportunities that young professionals need to become
              the trusted leaders our digital world needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-foreground">500+ Young Leaders Trained</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏢</span>
                <span className="text-foreground">Partnerships with 50+ Tech Companies</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span className="text-foreground">Global Community in 30+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
