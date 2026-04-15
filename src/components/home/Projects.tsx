import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ShieldCheck, Database, Layout, Gamepad2 } from 'lucide-react'

const projects = [
  {
    title: 'Memory Card Game',
    description: 'An interactive memory card game built with TypeScript. Test your memory skills with a fun and engaging card-matching experience.',
    tech: ['TypeScript', 'React', 'Game Logic', 'CSS'],
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2070&auto=format&fit=crop',
    type: 'Game/Interactive',
    github: 'https://github.com/Manvith911/Memory-Card-Game',
    stars: 1,
    forks: 0,
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-mono text-primary glow-green mb-6"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore my latest work — from anime streaming platforms to interactive games.
              Each project represents a unique challenge and learning experience.
            </p>
          </div>
          <a href="https://github.com/Manvith911" target="_blank" rel="noreferrer">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/20 hover:border-primary/50 text-sm h-12 px-6 text-foreground hover:text-primary transition-colors">
              View All on GitHub
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-background/40 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden relative backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/5 rounded-xl">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary uppercase text-[10px] tracking-widest font-bold px-2.5 py-0.5 rounded-md">
                      {project.type}
                    </span>
                    <div className="flex gap-2 items-center">
                      {project.stars > 0 && (
                        <span className="text-xs font-mono text-primary/80 mr-1">★ {project.stars}</span>
                      )}
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-primary bg-black/40 text-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold font-mono text-foreground tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-primary/80 border border-primary/20 px-2 py-0.5 rounded-sm bg-primary/5 tracking-wider font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
