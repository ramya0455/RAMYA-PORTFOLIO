import Hero from "@/components/hero"
import About from "@/components/about"
import Academic from "@/components/academic"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Academic />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
