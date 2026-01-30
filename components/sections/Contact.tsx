'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Send, CheckCheck, Phone } from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">¿Hablamos por WhatsApp?</h2>
                    <p className="text-gray-600 max-w-md mx-auto italic font-medium">Respuesta inmediata y trato personalizado para tu proyecto.</p>
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="max-w-md mx-auto bg-[#E5DDD5] rounded-[2.5rem] shadow-2xl overflow-hidden border border-black/5"
                >
                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] p-5 flex items-center gap-4 text-white">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 bg-white/10">
                            <Image
                                src={getAssetPath('/assets/logo.png')}
                                alt="Eireila"
                                fill
                                className="object-contain p-1.5"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-sm tracking-tight text-white">Eireila Montanero</h3>
                            <p className="text-[10px] opacity-90 flex items-center gap-1 font-medium">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                en línea ahora
                            </p>
                        </div>
                        <div className="flex gap-4 opacity-80">
                            <Phone size={18} />
                            <MessageCircle size={18} />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="p-6 space-y-4 min-h-[350px] flex flex-col justify-end bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:400px]">

                        {/* Received Message */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative border border-black/5"
                        >
                            <p className="text-sm text-gray-800 leading-relaxed">
                                ¡Hola! 👋 Soy Eireila. Me encantaría saber más sobre tu idea. ¿Qué tienes en mente para tu web?
                            </p>
                            <span className="text-[9px] text-gray-400 float-right mt-2 font-bold tracking-tighter">10:42 AM</span>
                        </motion.div>

                        {/* Received Message 2 */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-black/5"
                        >
                            <p className="text-sm text-gray-800 font-bold italic">
                                Juntos podemos hacer que tu marca brille online. ✨
                            </p>
                            <span className="text-[9px] text-gray-400 float-right mt-2 font-bold tracking-tighter">10:42 AM</span>
                        </motion.div>

                        {/* Typing CTA */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="pt-6"
                        >
                            <a
                                href="https://wa.me/584264255154"
                                target="_blank"
                                className="block bg-[#25D366] text-white p-5 rounded-2xl text-center font-bold text-sm shadow-xl hover:bg-[#128C7E] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                            >
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                ESCRIBIR POR WHATSAPP
                            </a>
                        </motion.div>
                    </div>

                    {/* Bottom Bar Imitation */}
                    <div className="bg-[#F0F2F5] p-4 flex gap-3 items-center">
                        <div className="flex-1 bg-white rounded-full px-5 py-3 text-xs text-gray-400 border border-black/5 shadow-inner">
                            Escribe un mensaje...
                        </div>
                        <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-md">
                            <Send size={16} />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 text-center opacity-70 flex items-center justify-center gap-2">
                    <CheckCheck size={18} className="text-blue-500" />
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">Visto • Disponible hoy</p>
                </div>

            </div>
        </section>
    )
}
