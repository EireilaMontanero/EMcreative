'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'
import { Layout, Monitor, PenTool, Smartphone, Globe, Shield } from 'lucide-react'

const detailedServices = [
    {
        title: "Diseño UI/UX Emocional",
        desc: "No solo diseño pantallas, diseño experiencias que conectan con tus usuarios a nivel emocional.",
        icon: <Layout className="w-10 h-10" />
    },
    {
        title: "Desarrollo High-End",
        desc: "Uso Next.js 15 y las últimas tecnologías para asegurar que tu web sea la más rápida del mercado.",
        icon: <Globe className="w-10 h-10" />
    },
    {
        title: "Branding con Propósito",
        desc: "Tu logo y tus colores deben contar tu historia. Creemos juntos una identidad que perdure.",
        icon: <PenTool className="w-10 h-10" />
    },
    {
        title: "Mobile First",
        desc: "Tu web se verá impecable en cualquier dispositivo, garantizado.",
        icon: <Smartphone className="w-10 h-10" />
    }
]

export default function ServicesPage() {
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
                        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">Mis Servicios</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
                            Soluciones digitales personalizadas para marcas que no se conforman con lo normal.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {detailedServices.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white/40 backdrop-blur-xl border border-white/60 p-12 rounded-[2.5rem] shadow-lg group hover:bg-black hover:text-white transition-all duration-500"
                            >
                                <div className="p-4 bg-white/50 rounded-2xl w-fit mb-8 group-hover:bg-white/20 transition-colors">
                                    {s.icon}
                                </div>
                                <h3 className="text-3xl font-serif mb-4">{s.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-lg">
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
