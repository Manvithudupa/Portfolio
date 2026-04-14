import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${encodeURIComponent(formData.message)}`
    const mailtoSubject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    window.open(`mailto:manvithudupa073@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_self')
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full opacity-20" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold font-mono text-primary glow-green mb-8 tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Have a question or want to work together? I'm always open to new
              opportunities and collaborations. Feel free to reach out via the form
              or through my social channels.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm group hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:manvithudupa073@gmail.com" className="text-lg font-mono text-foreground tracking-tight hover:text-primary transition-colors">manvithudupa073@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm group hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest font-bold">Social</div>
                  <div className="flex gap-4 mt-2">
                    <a href="https://github.com/Manvith911" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://animerealm.in" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-card/40 border border-border/50 backdrop-blur-xl border-glow relative overflow-hidden rounded-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase font-bold tracking-widest text-muted-foreground">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 rounded-lg text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase font-bold tracking-widest text-muted-foreground">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 rounded-lg text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase font-bold tracking-widest text-muted-foreground">Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 rounded-lg text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase font-bold tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Manvith, I'd like to talk about..."
                    className="w-full bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[150px] px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl h-14 font-bold tracking-widest text-lg uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
