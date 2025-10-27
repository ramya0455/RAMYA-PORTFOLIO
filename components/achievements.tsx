export default function Achievements() {
  const achievements = [
    {
      title: "Alumni Achievement Award",
      issuer: "PSG College of Technology",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Best Paper & Presenter",
      issuer: "IEEE SSITCON 2024",
      year: "2024",
      icon: "📜",
    },
    {
      title: "Anna University Rank: 14",
      issuer: "Anna University",
      year: "2023",
      icon: "🎓",
    },
    {
      title: "Finalist - AthenaHacks",
      issuer: "ACM-W India",
      year: "2024",
      icon: "⭐",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Achievements & Recognition</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl p-6 border border-secondary hover:border-accent transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 text-3xl">{achievement.icon}</div>
                <div className="space-y-3 pr-12">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                  <p className="text-xs font-medium text-accent">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
