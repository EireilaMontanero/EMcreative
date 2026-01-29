'use client'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, ExternalLink, Phone } from 'lucide-react'

export default function Contact() {
    const socialButtons = [
        { name: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com/eireilys/', color: 'hover:bg-pink-500' },
        { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/eireila-montanero/', color: 'hover:bg-blue-600' },
        { name: 'Fiverr', icon: <ExternalLink />, href: 'https://es.fiverr.com/eireila?public_mode=true', color: 'hover:bg-green-500 text-black' },
        { name: 'WhatsApp', icon: <Phone />, href: 'https://wa.me/584264255154', color: 'hover:bg-green-400 text-black' },
    ]

    return (
        <section id="contact" className="py-32 mb-20 px-6">
            <div className="container mx-auto max-w-4xl">

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-16 rounded-[3rem] shadow-2xl"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 drop-shadow-sm">Conectemos.</h2>
                        <p className="text-gray-700 text-lg max-w-md mx-auto">
                            ¿Hablamos sobre tu próximo proyecto? Encuéntrame en mis redes o envíame un mensaje.
                        </p>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {socialButtons.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center justify-center gap-3 p-6 bg-white/50 border border-white/60 rounded-2xl transition-all duration-300 group ${social.color} hover:text-white hover:shadow-lg`}
                            >
                                <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                                <span className="text-xs font-bold tracking-widest uppercase">{social.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="border-t border-black/5 pt-16">
                        <form className="space-y-4 text-left max-w-md mx-auto">
                            <input type="text" placeholder="NOMBRE" className="w-full bg-white/60 border-none p-4 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-black/10 transition-all font-bold text-xs tracking-widest uppercase" />
                            <input type="email" placeholder="EMAIL" className="w-full bg-white/60 border-none p-4 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-black/10 transition-all font-bold text-xs tracking-widest uppercase" />
                            <textarea rows={4} placeholder="MENSAJE" className="w-full bg-white/60 border-none p-4 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-black/10 transition-all font-bold text-xs tracking-widest uppercase resize-none" />

                            <button className="w-full bg-black text-white py-4 rounded-xl font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase shadow-lg">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </motion.div>

            </div>
        </section>
    )
}
