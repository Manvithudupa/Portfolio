import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ShieldCheck, Database, Layout } from 'lucide-react'
import { Card, Badge, Button } from '@blinkdotnew/ui'

const projects = [
  {
    title: 'Anime Streamer V2',
    description: 'A full-featured anime streaming platform with a custom player, search, and user lists. Built with speed and interactive UI in mind.',
    tech: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1578632738988-6888af4a8eb9?q=80&w=2070&auto=format&fit=crop',
    type: 'Frontend/FullStack'
  },
  {
    title: 'Manga Reader Pro',
    description: 'An interactive manga reader site with lazy loading images, chapters management, and bookmarking features.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redux'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2187&auto=format&fit=crop',
    type: 'System Arch'
  },
  {
    title: 'Cyber Security Toolset',
    description: 'A collection of basic security tools for vulnerability scanning and network monitoring. Aimed at student learning and security testing.',
    tech: ['Python', 'Nmap API', 'Flask', 'Docker'],
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    type: 'Security/Backend'
  },
  {
    title: 'Code Snippet Hub',
    description: 'A platform to share and store common coding snippets across different languages. Perfect for enthusiasts and students.',
    tech: ['React', 'Appwrite', 'Lucide', 'Shadcn/UI'],
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    type: 'Productivity'
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
              className="text-4xl md:text-5xl font-bold font-mono glow-green mb-6"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore my latest work across full-stack development and security tools.
              Each project represents a unique challenge and learning experience.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-sm h-12">
            View All Work
          </Button>
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
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="w-8 h-8 rounded-full border-white/10 hover:border-primary bg-black/40">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="w-8 h-8 rounded-full border-white/10 hover:border-primary bg-black/40">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
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
