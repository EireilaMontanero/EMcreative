'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Instagram, Linkedin, ExternalLink, Phone } from 'lucide-react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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
        ${scrolled ? 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg' : 'bg-black/20 backdrop-blur-md border border-white/10'}
        transition-all duration-500
      `}>

                {/* Logo Icon */}
                <Link href="#home" className="relative block h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border border-white/50 shadow-sm hover:scale-110 transition-transform">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-cover"
                        priority
                    />
                </Link>

                <div className="hidden md:flex gap-6">
                    {['Inicio', 'Sobre Mí', 'Servicios', 'Contacto'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item === 'Inicio' ? 'home' : item === 'Sobre Mí' ? 'about' : item === 'Servicios' ? 'services' : 'contact'}`}
                            className={`text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-200'}`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Social Icons Mini */}
                <div className="flex gap-4 border-l border-white/20 pl-6 ml-2">
                    {socialLinks.map((social, i) => (
                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            {social.icon}
                        </a>
                    ))}
                </div>

                <Link
                    href="https://wa.me/584264255154"
                    target="_blank"
                    className="px-4 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
                >
                    WhatsApp
                </Link>
            </div>
        </motion.nav>
    )
}
