'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

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
                        className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 md:p-14 rounded-[3rem] shadow-sm"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 drop-shadow-sm">
                            Mi historia.
                        </h2>
                        <div className="text-stone-800 font-medium leading-relaxed space-y-6">
                            <p className="text-lg leading-relaxed">
                                Hola, soy <span className="text-stone-950 font-bold">Eireila</span>, una chica que busca superarse a sí misma para lograr salir adelante. No solo busco que tu web se vea increíble, sino que realmente <span className="italic font-serif text-stone-600">transmita tu esencia</span>.
                            </p>
                            <p className="font-light italic text-stone-600 border-l-2 border-stone-200 pl-4 py-2">
                                "La magia ocurre cuando dejamos de intentar ser perfectos y empezamos a ser reales."
                            </p>
                            <p className="font-light text-stone-700">
                                Mezclo la precisión técnica con mi lado más creativo. Para mí, cada proyecto es una oportunidad de convertir tu visión en una experiencia digital única, cuidando cada detalle para que tu marca destaque como se merece.
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

                    {/* Profile Image - Large & Clean */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20"
                    >
                        <Image
                            src={getAssetPath('/assets/eireila.png')}
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
