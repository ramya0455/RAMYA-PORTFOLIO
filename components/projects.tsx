export default function Projects() {
  const projects = [
    {
      title: "Torus Ring Learning With Errors for ECG Data Security",
      role: "Research Lead",
      problem: "Securing sensitive ECG data against quantum threats",
      stack: ["Post-Quantum Cryptography", "TRLWE", "Python"],
      outcome: "Developed novel encryption scheme for healthcare data protection",
    },
    {
      title: "Multivariate RLWE for Healthcare Data Protection",
      role: "Researcher",
      problem: "Protecting healthcare records with advanced cryptographic methods",
      stack: ["RLWE", "Lattice-based Cryptography", "Java"],
      outcome: "Implemented secure data protection framework for medical systems",
    },
    {
      title: "Decentralized Voting System using Ethereum Blockchain",
      role: "Full Stack Developer",
      problem: "Creating transparent and secure voting mechanisms",
      stack: ["Ethereum", "Solidity", "Web3.js", "React"],
      outcome: "Built fully functional decentralized voting platform",
    },
    {
      title: "Speech-to-Face Attribute Extraction using ML",
      role: "ML Engineer",
      problem: "Extracting facial attributes from speech patterns",
      stack: ["Machine Learning", "Python", "TensorFlow", "OpenCV"],
      outcome: "Achieved 87% accuracy in attribute prediction",
    },
    {
      title: "IoT Smart Irrigation Automation",
      role: "IoT Developer",
      problem: "Optimizing water usage in agricultural systems",
      stack: ["Arduino", "IoT", "Sensors", "Python"],
      outcome: "Reduced water consumption by 40% in pilot deployment",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-accent">{project.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Technical Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Outcome</p>
                      <p className="text-muted-foreground">{project.outcome}</p>
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
