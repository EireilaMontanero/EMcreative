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
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className={`
                flex items-center gap-4 md:gap-8 px-4 py-2 rounded-2xl 
                ${scrolled
                    ? 'bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
                    : 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'}
                transition-all duration-700 ease-in-out group
            `}>

                {/* Logo Section */}
                <Link href={getAssetPath('/')} className="relative flex items-center gap-3 pr-4 border-r border-white/10">
                    <div className="h-8 w-8 rounded-lg overflow-hidden border border-white/20 shadow-inner">
                        <Image
                            src={getAssetPath('/assets/logo.png')}
                            alt="Logo"
                            width={32}
                            height={32}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                        Eireila
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex gap-8 items-center">
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
                            className={`text-[9px] font-bold tracking-[0.25em] uppercase transition-all hover:tracking-[0.4em] ${scrolled ? 'text-stone-600 hover:text-black' : 'text-stone-300 hover:text-white'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Utility Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher - Compact */}
                    <div className="flex bg-black/5 rounded-lg p-1">
                        {['en', 'es'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang as 'en' | 'es')}
                                className={`px-2 py-0.5 text-[8px] font-black rounded-md transition-all ${language === lang ? (scrolled ? 'bg-stone-900 text-white' : 'bg-white text-stone-900') : 'text-stone-400 hover:text-stone-200'}`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Socials - Glassy */}
                    <div className="hidden sm:flex gap-2">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1.5 rounded-lg transition-all ${scrolled ? 'hover:bg-stone-100 text-stone-700' : 'hover:bg-white/10 text-white'}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - App Style */}
                    <Link
                        href="https://wa.me/584264255154?text=Hola,%20vengo%20de%20tu%20pagina%20web"
                        target="_blank"
                        className={`
                            px-5 py-2 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all
                            ${scrolled
                                ? 'bg-stone-900 text-white hover:bg-black shadow-lg shadow-black/10'
                                : 'bg-white text-stone-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}
                        `}
                    >
                        Acceso Directo
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
