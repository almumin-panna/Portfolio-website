import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { User, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/about-formal.jpg', alt: 'Abdulla Al Mumin - Professional Portrait' },
  { src: '/images/lifestyle-1.jpg', alt: 'Abdulla Al Mumin - Outdoor' },
  { src: '/images/lifestyle-2.jpg', alt: 'Abdulla Al Mumin - Lifestyle' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeImage, setActiveImage] = useState(0)

  const nextImage = () => setActiveImage((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () => setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium tracking-wider uppercase mb-4">
            <User size={14} />
            About Me
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            A unique blend of structural engineering expertise and digital innovation
          </p>
        </motion.div>

        {/* Main content: Photo gallery + Text */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Left side - Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:w-[380px] flex-shrink-0"
          >
            {/* Main image container */}
            <div className="relative group">
              {/* Glow background */}
              <div className="absolute inset-[-8px] rounded-2xl bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-purple-500/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-dark-800">
                {galleryImages.map((img, i) => (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={false}
                    animate={{
                      opacity: activeImage === i ? 1 : 0,
                      scale: activeImage === i ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                ))}

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0c0e14]/80 via-[#0c0e14]/30 to-transparent" />

                {/* Navigation arrows */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-10">
                  <button
                    onClick={prevImage}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Dots indicator */}
                  <div className="flex items-center gap-2">
                    {galleryImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`rounded-full transition-all duration-300 ${
                          activeImage === i
                            ? 'w-6 h-2 bg-cyan-400'
                            : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`View photo ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextImage}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <div className="glass-card glow-border rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20">
                    <Sparkles size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-xl text-white mb-1">
                      Dual-Expertise Professional
                    </h3>
                    <p className="text-sm text-slate-500">
                      Civil Engineering × Web Development
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  Dedicated and technically skilled Diploma Civil Engineer with a strong 
                  academic background and practical understanding of construction principles. 
                  Proficient in AutoCAD 2D planning, structural drawing interpretation, and 
                  site supervision basics. Alongside my engineering expertise, I am a{' '}
                  <span className="text-cyan-400 font-medium">Professional Web Developer</span>{' '}
                  and{' '}
                  <span className="text-purple-400 font-medium">WordPress Expert</span>{' '}
                  with advanced IT skills, ensuring maximum efficiency in project documentation, 
                  automation, and digital representation. Eager to bring this unique dual-expertise 
                  to successful project executions.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
                  {[
                    { value: '2+', label: 'Fields of Expertise' },
                    { value: 'GPA 5.0', label: 'SSC Result' },
                    { value: '10+', label: 'Technical Skills' },
                    { value: '100%', label: 'Dedication' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="font-outfit font-bold text-xl sm:text-2xl gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
