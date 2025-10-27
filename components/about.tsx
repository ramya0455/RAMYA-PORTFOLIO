export default function About() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate cybersecurity professional with a Master's degree in Biometrics & Cybersecurity from
                PSG College of Technology. My research focuses on post-quantum cryptography and building resilient
                security systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong analytical mindset and research-driven approach, I'm dedicated to solving complex security
                challenges in emerging domains like cyber healthcare security and blockchain technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-6 border border-secondary">
                <h3 className="font-semibold text-primary mb-3">Key Highlights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>ME in Biometrics & Cybersecurity (2025) - PSG Tech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>CGPA: 9.49 - Strong academic excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Research focus on Post-Quantum Cryptography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Interest in Cyber Healthcare & Blockchain Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
