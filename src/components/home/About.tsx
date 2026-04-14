import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Code, Cpu, Terminal, Zap } from 'lucide-react'

const skills = [
  { name: 'Full Stack', icon: Code, color: 'text-primary' },
  { name: 'Cyber Security', icon: Shield, color: 'text-yellow-500' },
  { name: 'Cloud Computing', icon: Terminal, color: 'text-blue-500' },
  { name: 'AI Integration', icon: Zap, color: 'text-purple-500' },
]

const stats = [
  { label: 'Student', value: 'Learner' },
  { label: 'Developer', value: 'Creator' },
  { label: 'Enthusiast', value: 'Driven' },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full opacity-30" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-6 animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/40 rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <div className="relative h-full w-full rounded-3xl border border-primary/30 overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10" />
                <img
                  src="https://i.postimg.cc/PryvK0G1/Profilepic.png"
                  alt="Manvith Udupa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-8 z-10">
                  <h3 className="text-3xl font-bold font-mono text-primary mb-2 glow-green tracking-tighter">
                    Manvith Udupa
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                    &lt;Dev / Student / Security&gt;
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-xl font-bold font-mono text-primary glow-green uppercase tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold font-mono text-primary glow-green mb-8 tracking-tight">
              A Bit About <span className="text-primary">Me</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hello! I'm a student and developer with a passion for building interactive platforms
              and exploring the world of cybersecurity. My journey started with building
              anime and manga sites, which taught me the power of community-driven platforms
              and high-performance UI.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I love turning complex problems into elegant code and am constantly learning
              new technologies. Currently, I'm focusing on strengthening my knowledge in
              system security while crafting delightful user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="p-5 bg-background/50 border border-border/50 hover:border-primary/40 transition-all group backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors border border-primary/10">
                      <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <span className="font-mono font-bold text-foreground uppercase tracking-wider">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
