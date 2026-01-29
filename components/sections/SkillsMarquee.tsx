'use client'
import { motion } from 'framer-motion'

const schools = [
    { name: 'React', color: 'hover:text-cyan-400' },
    { name: 'Next.js', color: 'hover:text-white' },
    { name: 'TypeScript', color: 'hover:text-blue-500' },
    { name: 'Tailwind CSS', color: 'hover:text-cyan-300' },
    { name: 'Framer Motion', color: 'hover:text-purple-500' },
    { name: 'Figma', color: 'hover:text-pink-500' },
    { name: 'Node.js', color: 'hover:text-green-500' },
    { name: 'Git', color: 'hover:text-orange-500' },
]

export default function SkillsMarquee() {
    return (
        <section className="py-10 bg-black/5 border-y border-black/5 overflow-hidden relative">

            <div className="flex overflow-hidden group">
                {/* Doble loop para scroll infinito fluido */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex gap-16 items-center whitespace-nowrap px-8"
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 20 // Velocidad ajustable
                        }}
                    >
                        {schools.map((skill, index) => (
                            <div
                                key={index}
                                className={`text-4xl md:text-5xl font-bold uppercase tracking-tighter text-gray-300 transition-colors cursor-default ${skill.color}`}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Vinetas laterales para suavizar bordes */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none"></div>

        </section>
    )
}
