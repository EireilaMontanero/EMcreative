'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

// CATALOG DATA - Edit this array to add new projects
const projects = [
    {
        id: 1,
        title: "Yalorde Tentaciones",
        category: "E-Commerce",
        summary: "Plataforma premium de lencería con enfoque en UX convertible.",
        link: "https://yalordetentaciones.com",
        image: "/assets/banner.png"
    },
    {
        id: 2,
        title: "Estación Óptica",
        category: "Web Corporativa",
        summary: "Sistema de gestión y catálogo visual para servicios de salud visual.",
        link: "https://estacionoptica.com",
        image: "/assets/banner.png"
    }
]

export default function Portfolio() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F6]">
            <Navbar />

            <section className="pt-40 pb-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Muestrario Digital</h1>
                        <p className="text-stone-600 max-w-2xl mx-auto text-lg italic tracking-wide">
                            Cada proyecto es un reto de superación técnica y estética.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {projects.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <a href={p.link} target="_blank" className="block">
                                    <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-stone-200 bg-stone-100 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                                        <Image
                                            src={getAssetPath(p.image)}
                                            alt={p.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 blur-[1px] group-hover:blur-0"
                                        />
                                        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all" />

                                        {/* Overlay Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-stone-900/80 to-transparent text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-stone-300">{p.category}</p>
                                            <h3 className="text-3xl font-serif mb-3">{p.title}</h3>
                                            <p className="text-sm text-stone-300 max-w-xs leading-relaxed">{p.summary}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center p-20 bg-stone-100 rounded-[3rem] border border-stone-200/50">
                        <h3 className="text-2xl font-serif text-stone-800 mb-4">¿Quieres ver tu proyecto aquí?</h3>
                        <p className="text-stone-500 mb-8 max-w-md mx-auto">Empecemos a trabajar hoy mismo en tu visión digital.</p>
                        <a href={getAssetPath('/') + '#contact'} className="inline-block bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold tracking-widest uppercase hover:bg-stone-800 transition-all">
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
