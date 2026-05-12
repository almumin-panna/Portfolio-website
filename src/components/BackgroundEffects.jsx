import { useMemo } from 'react'

export default function BackgroundEffects() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Geometric accents */}
      <svg className="absolute top-[15%] left-[5%] opacity-[0.03]" width="200" height="200" viewBox="0 0 200 200">
        <polygon points="100,10 190,150 10,150" fill="none" stroke="#3b82f6" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-[20%] right-[8%] opacity-[0.03]" width="150" height="150" viewBox="0 0 150 150">
        <rect x="10" y="10" width="130" height="130" fill="none" stroke="#06b6d4" strokeWidth="1" rx="5" />
        <line x1="10" y1="75" x2="140" y2="75" stroke="#06b6d4" strokeWidth="0.5" />
        <line x1="75" y1="10" x2="75" y2="140" stroke="#06b6d4" strokeWidth="0.5" />
      </svg>
      <svg className="absolute top-[60%] left-[80%] opacity-[0.02]" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#a855f7" strokeWidth="1" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="#a855f7" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
