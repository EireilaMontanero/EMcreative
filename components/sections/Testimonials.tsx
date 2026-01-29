'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: "María G.",
        role: "Emprendedora",
        text: "Trabajar con Eireila fue lo mejor que le pasó a mi negocio. Entendió perfectamente lo que quería y lo superó."
    },
    {
        name: "Carlos R.",
        role: "Marketing Director",
        text: "No es solo una web, es una herramienta de ventas. El diseño es impecable y la velocidad increíble."
    },
    {
        name: "Sofia L.",
        role: "Creativa Indie",
        text: "Mi portafolio ahora tiene personalidad propia. Eireila tiene un ojo clínico para la estética."
    }
]

export default function Testimonials() {
    return (
        <section className="py-32 px-6">
            <div className="container mx-auto max-w-6xl">

                <h2 className="text-3xl md:text-5xl font-serif text-gray-900 text-center mb-16">Lo que dicen <span className="italic">de mí</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                        >
                            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-black/5 group-hover:text-black/10 transition-colors" />
                            <p className="text-gray-700 leading-relaxed italic mb-6 relative z-10">"{t.text}"</p>
                            <div className="relative z-10">
                                <p className="font-bold text-gray-900">{t.name}</p>
                                <p className="text-xs font-bold tracking-widest uppercase text-gray-500">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
