import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Site Engineer',
    company: 'Anchor Real Estate Ltd',
    period: 'March 2026 – August 2026',
    location: 'On-site',
    points: [
      'Managed day-to-day site operations and supervised construction activities to ensure structural integrity, quality control, and timely execution.',
      'Executed architectural and structural plans on-site, ensuring strict adherence to safety protocols and standard engineering practices.',
      'Leveraged digital and IT skills to streamline daily site reporting, track project progress accurately, and efficiently manage material inventory.',
    ],
  },
  {
    title: 'Intern Civil Engineer',
    company: 'DOT. Arch view',
    period: 'Sep 2025 – Nov 2025',
    location: 'On-site',
    points: [
      'Supervised residential construction site activities, checking reinforcement (rod binding) and casting quality.',
      'Interpreted architectural and structural AutoCAD 2D drawings for on-site layout implementation.',
      'Utilized advanced computer skills to prepare site reports, BOQs, and manage project documentation.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium tracking-wider uppercase mb-4">
            <Briefcase size={14} />
            Experience
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Hands-on experience bridging engineering theory with real-world execution
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="timeline-line w-full"
            />
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + idx * 0.2 }}
              className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 sm:w-5 sm:h-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2, type: 'spring', stiffness: 200 }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"
                />
                {/* Ping effect */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 rounded-full bg-blue-400"
                />
              </div>

              {/* Experience Card */}
              <div className="glass-card glow-border rounded-2xl p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-outfit font-bold text-xl text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-3">
                  {exp.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 text-cyan-400/70 mt-0.5 group-hover:text-cyan-400 transition-colors"
                      />
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
