'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

function MagneticItem({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        x.set(middleX * 0.5)
        y.set(middleY * 0.5)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="p-4 cursor-pointer"
        >
            {children}
        </motion.div>
    )
}

export default function MagneticNav() {
    const links = ['Inicio', 'Sobre Mí', 'Servicios', 'Contacto']
    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
            <div className="bg-white/70 backdrop-blur-xl px-8 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 flex gap-6">
                {links.map((link) => (
                    <MagneticItem key={link}>
                        <span className="text-base text-gray-600 font-medium hover:text-black transition-colors lowercase tracking-wide font-serif italic">
                            {link}
                        </span>
                    </MagneticItem>
                ))}
            </div>
        </nav>
    )
}
