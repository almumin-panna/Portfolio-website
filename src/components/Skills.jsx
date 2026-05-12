import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HardHat,
  Code2,
  PenTool,
  Shield,
  ClipboardList,
  Building2,
  Globe,
  Layers,
  Monitor,
  Wrench,
  Zap,
  LayoutGrid,
} from 'lucide-react'

const civilSkills = [
  {
    name: 'AutoCAD 2D',
    desc: 'Plan, Section & Elevation Drawings',
    level: 90,
    icon: PenTool,
  },
  {
    name: 'Site Management',
    desc: 'Blueprint Reading & Implementation',
    level: 85,
    icon: Building2,
  },
  {
    name: 'Material Estimation',
    desc: 'BOQ Preparation & Analysis',
    level: 80,
    icon: ClipboardList,
  },
  {
    name: 'Construction Safety',
    desc: 'Site Safety Protocols & Standards',
    level: 85,
    icon: Shield,
  },
]

const webSkills = [
  {
    name: 'Web Development',
    desc: 'Professional Frontend & Backend',
    level: 92,
    icon: Code2,
  },
  {
    name: 'WordPress Expert',
    desc: 'Themes, Plugins & Customization',
    level: 95,
    icon: Layers,
  },
  {
    name: 'Microsoft Office',
    desc: 'Advanced Suite Proficiency',
    level: 90,
    icon: Monitor,
  },
  {
    name: 'Digital Literacy',
    desc: 'Fast Learning & Troubleshooting',
    level: 88,
    icon: Zap,
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('civil')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = activeTab === 'civil' ? civilSkills : webSkills
  const isEngineering = activeTab === 'civil'

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-medium tracking-wider uppercase mb-4">
            <LayoutGrid size={14} />
            Expertise
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Dual-Track <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Bridging the physical and digital worlds with complementary expertise
          </p>
        </motion.div>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('civil')}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'civil'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeTab === 'civil' && (
                <motion.div
                  layoutId="skillTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <HardHat size={18} className="relative z-10" />
              <span className="relative z-10">Civil Engineering</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'web'
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeTab === 'web' && (
                <motion.div
                  layoutId="skillTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Globe size={18} className="relative z-10" />
              <span className="relative z-10">IT & Web Development</span>
            </button>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card glow-border rounded-2xl p-6 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                      isEngineering
                        ? 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40'
                        : 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40'
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        isEngineering ? 'text-blue-400' : 'text-cyan-400'
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-outfit font-semibold text-white text-lg mb-0.5">
                      {skill.name}
                    </h3>
                    <p className="text-slate-500 text-sm">{skill.desc}</p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      isEngineering ? 'text-blue-400' : 'text-cyan-400'
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Bar */}
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      isEngineering
                        ? 'bg-gradient-to-r from-blue-500 to-blue-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    }`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {(isEngineering
            ? ['Structural Drawings', 'Rod Binding QC', 'Concrete Mix', 'Surveying Basics', 'BNBC']
            : ['HTML/CSS', 'JavaScript', 'React', 'SEO', 'Figma']
          ).map((tool) => (
            <span
              key={tool}
              className={`px-4 py-2 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isEngineering
                  ? 'bg-blue-500/5 text-blue-300/80 border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/30'
                  : 'bg-cyan-500/5 text-cyan-300/80 border-cyan-500/15 hover:bg-cyan-500/10 hover:border-cyan-500/30'
              }`}
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
