'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import SkillsMarquee from '@/components/sections/SkillsMarquee'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/ui/Footer'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  return (
    <main className="w-full min-h-screen">
      <Navbar />

      {/* Hero Section - App Portal Style */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-stone-950">

        {/* Deep Video Integration with App Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src={getAssetPath('/assets/fondovideo.mp4')} type="video/mp4" />
          </video>
          {/* Advanced Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>

        {/* Hero Content - Dashboard Style */}
        <div className="relative z-20 w-full max-w-6xl px-6 flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >
            {/* Super Glass Header Badge */}
            <div className="px-6 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-12 shadow-2xl animate-pulse">
              <span className="text-[10px] font-black tracking-[0.5em] text-white/50 uppercase">
                System Operating Ready
              </span>
            </div>

            {/* Main Title - Premium Typography */}
            <h1 className="text-5xl md:text-8xl font-serif font-black text-white leading-tight mb-8 tracking-tighter">
              <span className="block opacity-40 italic font-light text-3xl md:text-5xl mb-2">Defining the</span>
              {t.hero.title}
            </h1>

            {/* Application Subtitle - Clean & Functional */}
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8"></div>

            <p className="text-stone-400 text-sm md:text-base max-w-xl font-light leading-relaxed tracking-wide mb-12">
              {t.hero.subtitle}. <span className="text-white italic">Elevando la arquitectura digital al siguiente nivel.</span>
            </p>

            {/* Quick Action Grid - App Feel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              {['Performance', 'Design', 'Strategy', 'Scalability'].map((item, i) => (
                <div key={item} className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center gap-2 hover:bg-white/10 transition-all cursor-default group">
                  <div className="w-1 h-1 bg-white/40 rounded-full group-hover:scale-x-[10] transition-transform"></div>
                  <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Scroll Indicator - Minimal */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[8px] font-bold tracking-[0.4em] text-white uppercase pr-1">Explore Core</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Corporate Content Flow */}
      <SkillsMarquee />

      <div className="relative">
        <About />
        <Process />
      </div>

      <Services />
      <FAQ />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
