'use client'
import { motion } from 'framer-motion'

const stats = [
    { label: 'Proyectos Listos', value: '40+', icon: '🚀' },
    { label: 'Clientes Felices', value: '100%', icon: '✨' },
    { label: 'Horas de Diseño', value: '2k+', icon: '🎨' },
    { label: 'Cafés Tomados', value: '∞', icon: '☕' },
]

export default function Statistics() {
    return (
        <section className="py-24 px-6 bg-white/5 border-y border-white/10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
