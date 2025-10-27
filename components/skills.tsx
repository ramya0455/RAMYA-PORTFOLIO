export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "SQL"],
    },
    {
      category: "Web & App Development",
      skills: ["HTML", "CSS", "JavaScript", "Android Studio"],
    },
    {
      category: "Security Tools",
      skills: ["Volatility", "Autopsy", "Wireshark", "Nmap"],
    },
    {
      category: "Specialization",
      skills: ["Post-Quantum Cryptography", "RLWE/TRLWE", "Blockchain Security"],
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-secondary hover:shadow-md transition-shadow duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
