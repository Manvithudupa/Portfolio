import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ShieldCheck, Database, Layout, Gamepad2 } from 'lucide-react'
import { Card, Badge, Button } from '@blinkdotnew/ui'

const projects = [
  {
    title: 'AniTaro',
    description: 'Clean & ad-free anime streaming website, offering a smooth watching experience. Has all the advanced features and functionalities.',
    tech: ['TypeScript', 'React', 'Streaming', 'Anilist API'],
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1578632738988-6888af4a8eb9?q=80&w=2070&auto=format&fit=crop',
    type: 'Frontend/FullStack',
    github: 'https://github.com/Manvith911/AniTaro',
    stars: 9,
    forks: 2,
  },
  {
    title: 'Aniku',
    description: 'Clean & ad-free anime streaming website with data fetched using Anilist & Hianime. Built for a smooth, interactive watching experience.',
    tech: ['TypeScript', 'Anilist', 'Hianime', 'Scraper'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2187&auto=format&fit=crop',
    type: 'Frontend/Scraper',
    github: 'https://github.com/Manvith911/Aniku',
    stars: 3,
    forks: 1,
  },
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
  },
  {
    title: 'Portfolio',
    description: 'This developer portfolio site built with React Three Fiber, Framer Motion, and Tailwind CSS. Features 3D starfield background and terminal-style UI.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    type: 'Portfolio/3D',
    github: 'https://github.com/Manvith911/Portfolio',
    stars: 0,
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
            <Button variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-sm h-12">
              View All on GitHub
            </Button>
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
              <Card className="bg-background/40 border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden relative backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/5">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 border-primary/20 text-primary uppercase text-[10px] tracking-widest font-bold">
                      {project.type}
                    </Badge>
                    <div className="flex gap-2 items-center">
                      {project.stars > 0 && (
                        <span className="text-xs font-mono text-primary/80 mr-1">★ {project.stars}</span>
                      )}
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Button size="icon" variant="outline" className="w-8 h-8 rounded-full border-white/10 hover:border-primary bg-black/40">
                          <Github className="w-4 h-4" />
                        </Button>
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
