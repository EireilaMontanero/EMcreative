'use client'
import Link from 'next/link'
import { Instagram, Linkedin, ExternalLink, Mail } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

export default function Footer() {
    return (
        <footer className="bg-stone-950 pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    {/* Brand Info */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                <span className="text-white font-serif italic text-xl">E</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white tracking-tighter">EIREILA</h3>
                        </div>
                        <p className="text-base text-stone-500 font-light leading-relaxed max-w-sm mb-8">
                            Ingeniería de software de alta fidelidad. Transformando visiones complejas en realidades digitales impecables.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/eireilys/' },
                                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/eireila-montanero/' },
                                { icon: <Mail size={18} />, href: 'mailto:contato@eireila.com' }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-stone-400 hover:bg-white/10 hover:text-white transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-600 mb-8">Navegación</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Sobre Mí', 'Servicios', 'Portafolio'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-stone-400 hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-600 mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            {['Fullstack Dev', 'UI Architecture', 'Cloud Solutions', 'AI Integration'].map((item) => (
                                <li key={item} className="text-sm text-stone-400">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Contact Prompt */}
                    <div className="md:col-span-4">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-serif text-white mb-4">¿Iniciamos el próximo reto?</h4>
                                <p className="text-sm text-stone-500 mb-6">Explora las posibilidades de tu próxima infraestructura digital.</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white group-hover:gap-4 transition-all"
                                >
                                    Conectar Ahora <ExternalLink size={14} />
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] text-stone-600 uppercase tracking-[0.2em]">
                        &copy; 2026 Eireila. Cloud Instance: V-01 (Beta)
                    </div>

                    <div className="flex gap-4 items-center">
                        {['NextJS', 'Tailwind', 'Framer', 'Node'].map((tech) => (
                            <span key={tech} className="text-[9px] font-black text-stone-700 hover:text-stone-400 transition-colors cursor-default border-b border-stone-800 pb-0.5">
                                {tech.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    <div className="text-[10px] text-stone-600 uppercase tracking-[0.2em] italic pr-2">
                        Caribbean High-Tech ⚡
                    </div>
                </div>
            </div>
        </footer>
    )
}
