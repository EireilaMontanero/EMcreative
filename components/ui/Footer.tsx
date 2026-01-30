'use client'
import Link from 'next/link'
import { Instagram, Linkedin, ExternalLink, Mail } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

export default function Footer() {
    return (
        <footer className="bg-white/10 backdrop-blur-xl border-t border-black/5 pt-20 pb-10 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 tracking-tighter">EIREILA</h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                            Creando experiencias digitales únicas desde Venezuela para el mundo. Enfocada en diseño premium y funcionalidad extrema.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Navegación</h4>
                        <ul className="space-y-4">
                            <li><Link href="#home" className="text-sm text-gray-800 hover:text-black transition-colors">Inicio</Link></li>
                            <li><Link href="#about" className="text-sm text-gray-800 hover:text-black transition-colors">Sobre Mí</Link></li>
                            <li><Link href={getAssetPath('/servicios')} className="text-sm text-gray-800 hover:text-black transition-colors">Servicios</Link></li>
                            <li><Link href={getAssetPath('/portfolio')} className="text-sm text-gray-800 hover:text-black transition-colors">Portafolio</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Servicios</h4>
                        <ul className="space-y-4">
                            <li><span className="text-sm text-gray-800">Desarrollo Web</span></li>
                            <li><span className="text-sm text-gray-800">Diseño UI/UX</span></li>
                            <li><span className="text-sm text-gray-800">Branding</span></li>
                            <li><span className="text-sm text-gray-800">Consultoría</span></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Social</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/eireilys/" target="_blank" className="p-2 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/eireila-montanero/" target="_blank" className="p-2 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:contato@eireila.com" className="p-2 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Corporate Style */}
                <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium text-center md:text-left">
                        &copy; 2026 Eireila Montanero. Todos los derechos reservados.
                    </div>

                    {/* Tech Stack Pills - Highly Professional */}
                    <div className="flex gap-3 items-center opacity-30 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-bold tracking-widest text-gray-900 border border-black/20 px-2 py-1 rounded">NEXT.JS 15</span>
                        <span className="text-[10px] font-bold tracking-widest text-gray-900 border border-black/20 px-2 py-1 rounded">TAILWIND V4</span>
                        <span className="text-[10px] font-bold tracking-widest text-gray-900 border border-black/20 px-2 py-1 rounded">FRAMER</span>
                    </div>

                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.1em]">
                        Hecho con pasión desde el Caribe 🌴
                    </div>
                </div>
            </div>
        </footer>
    )
}
