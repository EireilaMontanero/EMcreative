'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const projects = [
    {
        title: "Yalorde Tentaciones",
        category: "E-Commerce Premium",
        desc: "Tienda online de lencería con pasarela de pagos y gestión de inventario.",
        image: "/assets/banner.png" // Temporary, reuse existing assets
    },
    {
        title: "Estación Óptica",
        category: "Corporate Web",
        desc: "Plataforma de servicios ópticos con agendamiento y catálogo.",
        image: "/assets/banner.png"
    },
    {
        title: "Personal Branding",
        category: "Portfolio Design",
        desc: "Diseño de identidad visual para creativos independientes.",
        image: "/assets/banner.png"
    }
]

export default function Portfolio() {
    return (
        <main className="w-full min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">Mis Proyectos</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
                            Una selección de trabajos donde la estética y la funcionalidad se encuentran.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl mb-6 border border-white/40">
                                    <Image
                                        src={getAssetPath(p.image)}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 blur-[2px] group-hover:blur-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{p.category}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
