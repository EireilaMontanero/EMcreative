'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
    const { t } = useLanguage()
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 md:p-14 rounded-[3rem] shadow-sm"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 drop-shadow-sm">
                            {t.about.title}
                        </h2>
                        <div className="text-stone-800 font-medium leading-relaxed space-y-6">
                            <p className="text-lg leading-relaxed">
                                {t.about.textFirst} {t.about.textSecond}
                            </p>
                            <p className="font-light italic text-stone-600 border-l-2 border-stone-200 pl-4 py-2">
                                "{t.about.quote}"
                            </p>
                            <p className="font-light text-stone-700">
                                {t.about.description}
                            </p>
                        </div>

                        <div className="mt-8 flex gap-3 flex-wrap">
                            {['Estrategia', 'Diseño', 'Alma'].map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-stone-100 text-stone-500 rounded-full text-[10px] font-bold tracking-widest uppercase border border-stone-200/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Abstract Graphic - Replaces Personal Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-stone-900 flex items-center justify-center group"
                    >
                        {/* Interactive Background Grid */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

                        {/* Animated Abstract Shapes */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-64 h-64 border-2 border-white/10 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                        >
                            <div className="w-48 h-48 border border-white/20 rounded-full animate-pulse"></div>
                            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45"></div>
                        </motion.div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Digital Architecture</span>
                            <div className="w-12 h-[1px] bg-white/20 mb-4 transition-all group-hover:w-24"></div>
                            <span className="text-4xl font-serif italic">Eireila</span>
                        </div>

                        {/* Subtle shine overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
