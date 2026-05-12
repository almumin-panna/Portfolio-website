import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Heart,
  ArrowUpRight,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1718 678311',
    href: 'tel:+8801718678311',
    color: 'blue',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'almumin.ce@gmail.com',
    href: 'mailto:almumin.ce@gmail.com',
    color: 'cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bogura, Rajshahi, Bangladesh',
    href: null,
    color: 'purple',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'almumin-ce.vercel.app',
    href: 'https://almumin-ce.vercel.app',
    color: 'green',
  },
]

const colorStyles = {
  blue: {
    iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40',
    iconText: 'text-blue-400',
  },
  cyan: {
    iconBg: 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40',
    iconText: 'text-cyan-400',
  },
  purple: {
    iconBg: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40',
    iconText: 'text-purple-400',
  },
  green: {
    iconBg: 'bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/40',
    iconText: 'text-green-400',
  },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-medium tracking-wider uppercase mb-4">
            <Send size={14} />
            Get in Touch
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Ready to collaborate? Reach out through any of these channels
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {contactInfo.map((item, i) => {
            const Icon = item.icon
            const styles = colorStyles[item.color]
            const Wrapper = item.href ? 'a' : 'div'
            const wrapperProps = item.href
              ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
              : {}

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="glass-card glow-border rounded-2xl p-6 flex items-center gap-4 group block"
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${styles.iconBg}`}
                  >
                    <Icon size={24} className={styles.iconText} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base truncate">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={18}
                      className="flex-shrink-0 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  )}
                </Wrapper>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
              <Mail size={28} className="text-cyan-400" />
            </div>
            <h3 className="font-outfit font-bold text-2xl text-white mb-3">
              Interested in working together?
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              Whether it's a construction project or a web development opportunity, I'd love to hear from you.
            </p>
            <a
              href="mailto:almumin.ce@gmail.com"
              className="cta-primary group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send size={16} />
                Send a Message
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-24 pt-8 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 text-sm flex items-center justify-center gap-1.5">
            Designed & Built with
            <Heart size={14} className="text-red-400/60 fill-red-400/60" />
            by
            <span className="text-slate-400 font-medium">Abdulla Al Mumin</span>
          </p>
          <p className="text-slate-700 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </motion.footer>
    </section>
  )
}
