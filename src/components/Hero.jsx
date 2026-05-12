import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight } from 'lucide-react'

const phrases = [
  'Building Structures in the Real World',
  'Architecting the Web with Precision',
  'Civil Engineer × Web Developer',
  'Where Engineering Meets Digital Innovation',
]

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const typeEffect = useCallback(() => {
    const phrase = phrases[currentPhrase]

    if (!isDeleting) {
      if (charIndex < phrase.length) {
        setDisplayText(phrase.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(phrase.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else {
        setIsDeleting(false)
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        return
      }
    }
  }, [charIndex, currentPhrase, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 30 : 60
    const timer = setTimeout(typeEffect, speed)
    return () => clearTimeout(timer)
  }, [typeEffect, isDeleting])

  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('experience')
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated gradient ring behind photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] opacity-[0.07]">
        <motion.div
          className="w-full h-full rounded-full border border-blue-500/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-cyan-400/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-purple-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-outfit font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-6"
            >
              <span className="text-white">Abdulla</span>
              <br />
              <span className="gradient-text">Al Mumin</span>
            </motion.h1>

            {/* Typing Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="h-16 sm:h-12 flex items-center justify-center lg:justify-start mb-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light font-inter">
                <span className="glow-text text-cyan-300/90">{displayText}</span>
                <span className="typing-cursor ml-0.5" />
              </p>
            </motion.div>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Civil Engineer
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Web Developer
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                WordPress Expert
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#experience"
                onClick={handleScrollToProjects}
                className="cta-primary group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects / Experience
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="/Abdulla-Al-Mumin-CV.pdf"
                download="Abdulla Al Mumin CV.pdf"
                className="cta-secondary group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-300 text-sm sm:text-base"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, type: 'spring', stiffness: 100 }}
            className="relative order-1 lg:order-2 flex-shrink-0"
          >
            {/* Glowing ring behind */}
            <div className="absolute inset-[-12px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />
            
            {/* Rotating border ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #a855f7, #3b82f6)',
                padding: '3px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-[#0c0e14]" />
            </motion.div>

            {/* Profile image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10">
              <img
                src="/images/hero-profile.png"
                alt="Abdulla Al Mumin - Civil Engineer & Web Developer"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0c0e14]/60 to-transparent" />
            </div>

            {/* Floating badges around photo */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 sm:top-2 sm:right-0 px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/25 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold text-blue-400">🏗️ Engineer</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-4 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/25 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold text-cyan-400">💻 Developer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
