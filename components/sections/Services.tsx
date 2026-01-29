'use client'
import { motion } from 'framer-motion'
import { Monitor, PenTool, Layout } from 'lucide-react'

const services = [
    {
        title: "Diseño Web",
        description: "Creación de sitios web únicos, diseñados a medida para capturar la identidad de tu marca.",
        icon: <Layout className="w-8 h-8 text-black" />,
    },
    {
        title: "Desarrollo",
        description: "Código limpio y optimizado. Sitios rápidos, seguros y adaptables a cualquier dispositivo.",
        icon: <Monitor className="w-8 h-8 text-black" />,
    },
    {
        title: "Identidad Visual",
        description: "Coherencia estética. Me aseguro de que cada píxel combine con tu logo y tus colores.",
        icon: <PenTool className="w-8 h-8 text-black" />,
    }
]

export default function Services() {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 drop-shadow-sm">Servicios</h2>
                    <div className="h-1 w-20 bg-black mx-auto opacity-20 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/40 backdrop-blur-lg border border-white/50 p-10 rounded-3xl hover:bg-white/60 transition-colors duration-500 shadow-lg group cursor-default"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900 mb-3">{s.title}</h3>
                            <p className="text-gray-700 leading-relaxed text-sm font-medium">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
