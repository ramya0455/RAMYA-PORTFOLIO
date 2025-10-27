"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 slide-up">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
            <img
              src="/professional-woman-cybersecurity-expert.jpg"
              alt="Ramya P"
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            <span className="gradient-text">Ramya P</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-primary">
            Cybersecurity Scholar | Post-Quantum Cryptography | App Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building secure systems that are resilient.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary text-primary hover:bg-secondary bg-transparent"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
