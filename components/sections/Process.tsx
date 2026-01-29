'use client'
import { motion } from 'framer-motion'
import { Search, PenTool, Rocket } from 'lucide-react'

const steps = [
    {
        id: '01',
        title: 'Nos Conocemos',
        desc: 'Primero hablamos. Necesito entender qué tienes en mente, quién es tu público y qué quieres lograr.',
        icon: <Search className="w-8 h-8" />
    },
    {
        id: '02',
        title: 'Diseño y Plan',
        desc: 'Aquí es donde la idea toma forma. Defino el estilo visual y la estructura para que todo fluya perfecto.',
        icon: <PenTool className="w-8 h-8" />
    },
    {
        id: '03',
        title: 'Creación y Entrega',
        desc: 'Construyo la web con las mejores herramientas. Me aseguro de que todo funcione de maravilla antes del estreno.',
        icon: <Rocket className="w-8 h-8" />
    }
]

export default function Process() {
    return (
        <section className="py-32 px-6 bg-white/30">
            <div className="container mx-auto max-w-6xl">

                <div className="mb-20 text-center">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 block">Mi Metodología</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Proceso Creativo</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Línea conectora (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform relative z-10">
                                {step.icon}
                            </div>

                            <div className="text-center">
                                <span className="text-6xl font-serif text-gray-100 absolute top-4 right-4 -z-10 font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                                    {step.id}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
