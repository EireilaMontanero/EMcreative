'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Text Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/70 backdrop-blur-xl border border-white/60 p-10 md:p-14 rounded-[2rem] shadow-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 drop-shadow-sm">
                            Sobre mí.
                        </h2>
                        <div className="text-gray-800 font-medium leading-relaxed space-y-6">
                            <p className="text-lg">
                                Soy <span className="text-black font-bold">Eireila Montanero</span>. Mi misión es simple: crear experiencias digitales que no solo funcionen, sino que <span className="italic font-serif text-black">se sientan</span>.
                            </p>
                            <p className="font-light text-gray-700">
                                Combino la lógica de la programación con la intuición del arte. Utilizo tu visión como materia prima para construir sitios web que reflejan la verdadera esencia de tu marca.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-3 flex-wrap">
                            {['Diseño Web', 'Estrategia', 'Branding'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/60 border border-black/5 rounded-full text-xs font-bold tracking-widest uppercase text-gray-900 hover:bg-white hover:shadow-md transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Image - Large & Clean */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20"
                    >
                        <Image
                            src="/assets/eireila.png"
                            alt="Eireila Montanero"
                            width={600}
                            height={800}
                            className="w-full h-full object-cover"
                            priority
                        />

                        {/* Subtle shine overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
