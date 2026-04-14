import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cpu, Code2, Globe } from 'lucide-react'

const features = [
  { icon: Shield, label: 'Cyber Security' },
  { icon: Code2, label: 'Full Stack Dev' },
  { icon: Globe, label: 'Anime/Manga Explorer' },
  { icon: Cpu, label: 'Coding Enthusiast' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold mb-6 tracking-wider uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-primary glow-green">Manvith Udupa</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            A developer, student, and coding enthusiast aiming to explore the frontiers of{' '}
            <span className="text-foreground font-semibold underline decoration-primary/40 decoration-2 underline-offset-4">Cyber Security</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full h-12 px-8 font-bold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full h-12 px-8 font-bold tracking-wide border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-all group"
              >
                <feature.icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wide">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right 3D Visual placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="relative z-10 border border-primary/20 bg-background/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl overflow-hidden perspective-1000">
            <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 flex items-center gap-2 px-4 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
            </div>
            <div className="mt-8 font-mono text-sm space-y-2 opacity-80">
              <div className="flex gap-2 text-primary">
                <span>&gt;</span>
                <span className="text-foreground">Manvith.init()</span>
              </div>
              <div className="pl-4 text-muted-foreground">Initializing developer profile...</div>
              <div className="pl-4 text-muted-foreground flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>CyberSecurity_Module loaded</span>
              </div>
              <div className="pl-4 text-muted-foreground flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>AnimeProjects_Module loaded</span>
              </div>
              <div className="pl-4 text-muted-foreground flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>MangaSites_Module loaded</span>
              </div>
              <div className="flex gap-2 text-primary mt-4">
                <span>&gt;</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
