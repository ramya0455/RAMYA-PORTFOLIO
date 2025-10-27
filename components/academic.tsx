export default function Academic() {
  const education = [
    {
      degree: "ME in Biometrics & Cybersecurity",
      institution: "PSG College of Technology",
      year: "2025",
      cgpa: "9.49",
      highlight: "Current",
    },
    {
      degree: "BE in Computer Science & Engineering",
      institution: "TKS College of Technology (Anna University)",
      year: "2023",
      cgpa: "9.37",
      highlight: "Rank: 14",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Academic Excellence</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 pt-2 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">CGPA</p>
                      <p className="text-2xl font-bold text-accent">{edu.cgpa}</p>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-sm font-medium text-primary bg-secondary/50 px-3 py-1 rounded-lg inline-block">
                        {edu.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
