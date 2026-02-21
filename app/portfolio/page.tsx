'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

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

            <section className="pt-48 pb-32 px-6 bg-stone-950 min-h-screen relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-32"
                    >
                        <span className="text-[10px] font-black tracking-[0.5em] text-stone-500 uppercase mb-6 block">Project Log_04</span>
                        <h1 className="text-5xl md:text-9xl font-serif text-white mb-8 tracking-tighter leading-none">
                            Muestrario <span className="italic block text-stone-400">Digital</span>
                        </h1>
                        <div className="h-[1px] w-24 bg-stone-800"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <a href={p.link} target="_blank" className="block relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-stone-900">
                                    <Image
                                        src={getAssetPath(p.image)}
                                        alt={p.title}
                                        fill
                                        className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
                                    />

                                    {/* App Info Overlay */}
                                    <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-stone-950 via-transparent to-transparent">
                                        <div className="pb-8 border-b border-white/10 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-400 mb-4 block">{p.category}</span>
                                            <h3 className="text-4xl font-serif text-white mb-4 tracking-tight">{p.title}</h3>
                                            <p className="text-stone-400 text-sm font-light max-w-sm leading-relaxed mb-6">{p.summary}</p>
                                        </div>

                                        <div className="flex justify-between items-center group-hover:opacity-50 transition-opacity">
                                            <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">ID: 00{p.id}</span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                                                <ExternalLink size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 p-16 md:p-32 bg-white/5 border border-white/10 rounded-[4rem] text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight">¿Iniciamos tu próxima <span className="italic">Génesis</span>?</h3>
                            <p className="text-stone-500 mb-12 max-w-md mx-auto text-lg font-light">Transformando conceptos abstractos en productos tangibles de alto rendimiento.</p>
                            <Link href={getAssetPath('/') + '#contact'} className="inline-flex items-center gap-4 bg-white text-stone-900 px-12 py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-stone-200 transition-all shadow-xl shadow-white/5">
                                Desplegar Proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
