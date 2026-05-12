import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

const educationData = [
  {
    degree: 'B.Sc. in Civil Engineering',
    institution: 'European University of Bangladesh',
    period: 'March 2026 – Present',
    status: 'Ongoing',
    icon: GraduationCap,
    color: 'blue',
    description: 'Pursuing bachelor\'s degree to deepen structural engineering knowledge and research capabilities.',
  },
  {
    degree: 'Diploma in Civil Engineering',
    institution: 'Naogaon Polytechnic Institute',
    period: '2022 – 2026',
    status: 'Completed',
    icon: BookOpen,
    color: 'cyan',
    description: 'Comprehensive 4-year diploma covering construction, surveying, AutoCAD, and structural analysis.',
  },
  {
    degree: 'SSC in Science',
    institution: 'Kagail Karuna Kanta High School',
    period: '2021',
    status: 'GPA: 5.00',
    icon: Award,
    color: 'purple',
    description: 'Achieved perfect GPA in Science stream, building a strong foundation in mathematics and physics.',
  },
]

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'group-hover:border-blue-500/40',
    hoverBg: 'group-hover:bg-blue-500/20',
    text: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glow: 'group-hover:shadow-blue-500/10',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    hoverBorder: 'group-hover:border-cyan-500/40',
    hoverBg: 'group-hover:bg-cyan-500/20',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'group-hover:border-purple-500/40',
    hoverBg: 'group-hover:bg-purple-500/20',
    text: 'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'group-hover:shadow-purple-500/10',
  },
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium tracking-wider uppercase mb-4">
            <GraduationCap size={14} />
            Education
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            A strong educational foundation powering professional excellence
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, i) => {
            const Icon = edu.icon
            const colors = colorMap[edu.color]

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`glass-card glow-border rounded-2xl p-6 sm:p-7 group relative overflow-hidden ${colors.glow} transition-shadow duration-500`}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    edu.color === 'blue'
                      ? 'from-blue-500 to-blue-400'
                      : edu.color === 'cyan'
                      ? 'from-cyan-500 to-cyan-400'
                      : 'from-purple-500 to-purple-400'
                  } opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} ${colors.hoverBg} ${colors.hoverBorder} border flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon size={26} className={colors.text} />
                </div>

                {/* Content */}
                <h3 className="font-outfit font-bold text-lg text-white mb-1.5 leading-tight">
                  {edu.degree}
                </h3>
                <p className={`text-sm font-medium ${colors.text} mb-3`}>
                  {edu.institution}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {edu.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}
                  >
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
