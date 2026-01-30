'use client'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        q: "¿Cuánto tiempo toma desarrollar una web?",
        a: "Depende de la complejidad, pero una web corporativa estándar suele estar lista en 2 a 3 semanas. Proyectos más grandes como E-commerce pueden tomar de 4 a 6 semanas."
    },
    {
        q: "¿Tendré control total sobre mi sitio?",
        a: "Absolutamente. Te entrego una plataforma autogestionable o el código fuente completo, según prefieras. Tú eres el dueño de tu activo digital."
    },
    {
        q: "¿Ofreces mantenimiento después del lanzamiento?",
        a: "Sí, ofrezco planes de soporte mensual para asegurar que tu web esté siempre actualizada, segura y volando a máxima velocidad."
    },
    {
        q: "¿Cómo es el proceso de pago?",
        a: "Generalmente trabajamos con un anticipo del 50% para iniciar y el 50% restante al completar el proyecto y recibir tu total aprobación."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-32 px-6">
            <div className="container mx-auto max-w-3xl">

                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 block">Preguntas Comunes</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Resolviendo <span className="italic">tus dudas</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-black/5 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-4 text-left group"
                            >
                                <span className="text-lg font-bold text-gray-800 group-hover:text-black transition-colors">{faq.q}</span>
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-600 leading-relaxed pb-4 text-sm">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
