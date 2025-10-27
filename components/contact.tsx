import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing cybersecurity, research opportunities, and innovative projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-secondary bg-transparent"
            >
              <a href="mailto:ramya@example.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
