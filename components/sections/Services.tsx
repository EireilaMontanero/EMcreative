'use client'
import { motion } from 'framer-motion'
import { Monitor, PenTool, Layout } from 'lucide-react'

const services = [
    {
        title: "Páginas con Alma",
        description: "Diseño sitios web que no solo son bonitos, sino que capturan la identidad real de tu marca.",
        icon: <Layout className="w-8 h-8 text-black" />,
    },
    {
        title: "Desarrollo a Medida",
        description: "Transformo tus ideas en realidad con código limpio, rápido y optimizado para cualquier pantalla.",
        icon: <Monitor className="w-8 h-8 text-black" />,
    },
    {
        title: "Branding Visual",
        description: "Logos y colores que cuentan tu historia. Me aseguro de que todo se vea profesional y coherente.",
        icon: <PenTool className="w-8 h-8 text-black" />,
    }
]

export default function Services() {
    return (
        <section id="services" className="py-32 bg-stone-900 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black tracking-[0.5em] text-stone-500 uppercase mb-4 block">Core Capabilities</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tighter leading-tight">
                            Soluciones de <span className="italic text-stone-400">Ingeniería</span> Digital
                        </h2>
                    </div>
                    <div className="pb-2">
                        <div className="h-[1px] w-24 bg-stone-700"></div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-700 group cursor-default"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:rotate-12 transition-transform">
                                <span className="text-white opacity-80 group-hover:opacity-100">{s.icon}</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4 tracking-tight">{s.title}</h3>
                            <p className="text-stone-400 leading-relaxed text-sm font-light">
                                {s.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Active Module</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
