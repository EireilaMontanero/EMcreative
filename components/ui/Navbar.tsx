'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Instagram, Linkedin, ExternalLink, Phone } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const socialLinks = [
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/eireilys/' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/eireila-montanero/' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4`}
        >
            <div className={`
        flex items-center gap-6 px-6 md:gap-8 md:px-8 py-3 rounded-full 
        ${scrolled ? 'bg-white/40 backdrop-blur-xl border border-stone-200/50 shadow-sm' : 'bg-black/20 backdrop-blur-md border border-white/10'}
        transition-all duration-500
      `}>

                {/* Logo Icon */}
                <Link href={getAssetPath('/')} className="relative block h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border border-stone-200/50 shadow-sm hover:scale-110 transition-transform">
                    <Image
                        src={getAssetPath('/assets/logo.png')}
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-cover"
                        priority
                    />
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    {[
                        { name: t.nav.home, href: getAssetPath('/') },
                        { name: t.nav.about, href: getAssetPath('/') + '#about' },
                        { name: t.nav.services, href: getAssetPath('/servicios') },
                        { name: t.nav.portfolio, href: getAssetPath('/portfolio') },
                        { name: t.nav.contact, href: getAssetPath('/') + '#contact' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-stone-800 hover:text-stone-500' : 'text-stone-200 hover:text-white'}`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Language Toggle */}
                    <div className="flex gap-2 ml-4 border-l border-white/20 pl-4 h-4 items-center">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`text-[9px] font-bold transition-all ${language === 'en' ? (scrolled ? 'text-stone-900 underline underline-offset-4' : 'text-white underline underline-offset-4') : 'text-stone-400 hover:text-stone-200'}`}
                        >
                            EN
                        </button>
                        <span className="text-stone-600 text-[10px]">/</span>
                        <button
                            onClick={() => setLanguage('es')}
                            className={`text-[9px] font-bold transition-all ${language === 'es' ? (scrolled ? 'text-stone-900 underline underline-offset-4' : 'text-white underline underline-offset-4') : 'text-stone-400 hover:text-stone-200'}`}
                        >
                            ES
                        </button>
                    </div>
                </div>

                {/* Social Icons Mini */}
                <div className="flex gap-4 border-l border-white/20 pl-6 ml-2">
                    {socialLinks.map((social, i) => (
                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-stone-800' : 'text-white'}`}>
                            {social.icon}
                        </a>
                    ))}
                </div>

                <Link
                    href="https://wa.me/584264255154?text=Hola,%20vengo%20de%20tu%20pagina%20web"
                    target="_blank"
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all hidden sm:block ${scrolled ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-white text-stone-900 hover:bg-stone-100'}`}
                >
                    WhatsApp
                </Link>
            </div>
        </motion.nav>
    )
}
