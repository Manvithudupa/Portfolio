import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Vercel', icon: '▲' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full opacity-20" />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-mono text-primary glow-green mb-6 tracking-tight"
        >
          Tech <span className="text-primary">Stack</span>
        </motion.h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-2xl">
          Technologies and tools I use to bring ideas to life — from frontend frameworks
          to backend services and developer tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="text-xl font-bold font-mono text-primary mb-6 uppercase tracking-widest border-b border-primary/20 pb-3">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-mono font-medium text-foreground group-hover:text-primary transition-colors tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
