'use client'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function FAQ() {
    const { t } = useLanguage()

    const faqs = [
        {
            q: t.faq.q1.q,
            a: t.faq.q1.a
        },
        {
            q: t.faq.q2.q,
            a: t.faq.q2.a
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-32 px-6">
            <div className="container mx-auto max-w-3xl">

                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-4 block">{t.faq.tag}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900">{t.faq.title}<span className="italic">{t.faq.titleItalic}</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-black/5 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-4 text-left group"
                            >
                                <span className="text-lg font-bold text-stone-800 group-hover:text-black transition-colors">{faq.q}</span>
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-stone-600 leading-relaxed pb-4 text-sm">
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
