import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Background3D } from './components/Background3D'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/home/Hero'
import { About } from './components/home/About'
import { Projects } from './components/home/Projects'
import { Skills } from './components/home/Skills'
import { Contact } from './components/home/Contact'
import { Terminal } from 'lucide-react'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Background */}
      <Background3D />
      
      {/* Content */}
      <div className="relative z-10 grid-bg">
        <Navbar />
        
        <main className="scroll-smooth">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />

          {/* Simple Footer */}
          <footer className="py-12 px-6 border-t border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 font-mono font-bold text-lg text-primary glow-green">
                <Terminal className="w-5 h-5" />
                <span>Manvith.dev</span>
              </div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} Manvith Udupa • All Rights Reserved
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Built with <span className="text-primary hover:glow-green transition-all cursor-default">React Three Fiber</span> & <span className="text-primary hover:glow-green transition-all cursor-default">Tailwind</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
