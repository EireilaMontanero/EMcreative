'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'
import { Layout, PenTool, Smartphone, Globe, CreditCard } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ServicesPage() {
    const { t } = useLanguage()

    const detailedServices = [
        {
            title: t.services.ui.title,
            desc: t.services.ui.desc,
            icon: <Layout className="w-10 h-10" />
        },
        {
            title: t.services.dev.title,
            desc: t.services.dev.desc,
            icon: <Globe className="w-10 h-10" />
        },
        {
            title: t.services.branding.title,
            desc: t.services.branding.desc,
            icon: <PenTool className="w-10 h-10" />
        },
        {
            title: t.services.mobile.title,
            desc: t.services.mobile.desc,
            icon: <Smartphone className="w-10 h-10" />
        }
    ]

    return (
        <main className="w-full min-h-screen bg-[#FAF9F6]">
            <Navbar />

            <section className="pt-40 pb-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tighter">{t.services.title}</h1>
                        <p className="text-stone-600 max-w-2xl mx-auto text-lg italic tracking-wide">
                            {t.services.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {detailedServices.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/40 backdrop-blur-xl border border-stone-200 p-12 rounded-[3rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                            >
                                <div className="p-5 bg-stone-100 rounded-2xl w-fit mb-8 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                                    {s.icon}
                                </div>
                                <h3 className="text-3xl font-serif text-stone-900 mb-4 tracking-tight">{s.title}</h3>
                                <p className="text-stone-600 leading-relaxed text-lg font-light">
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-32 p-16 bg-stone-900 rounded-[3rem] text-white text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <CreditCard className="mx-auto mb-8 w-12 h-12 text-stone-400" />
                        <h2 className="text-4xl font-serif mb-6">{t.services.paymentsTitle}</h2>
                        <p className="text-stone-300 max-w-xl mx-auto text-lg leading-relaxed mb-10">
                            {t.services.paymentsDesc}
                        </p>
                        <a
                            href="https://wa.me/584264255154?text=Hola,%20vengo%20de%20tu%20pagina%20web"
                            target="_blank"
                            className="bg-white text-stone-900 px-10 py-4 rounded-2xl font-bold tracking-widest uppercase hover:bg-stone-200 transition-all active:scale-95"
                        >
                            {t.services.paymentsCta}
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
