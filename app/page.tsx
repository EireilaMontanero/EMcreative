import Navbar from '@/components/ui/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import SkillsMarquee from '@/components/sections/SkillsMarquee'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Statistics from '@/components/sections/Statistics'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/ui/Footer'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />

      {/* Hero Section - Video + Glass Logo */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4">

        {/* Helper Gradient Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={getAssetPath('/assets/fondovideo.mp4')} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center max-w-4xl text-center">
          {/* Logo Container - Glass Effect - Updated Animation */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-full mb-10 shadow-2xl animate-fade-in-up hover:scale-105 transition-transform duration-700">
            <div className="relative flex items-center justify-center">
              <Image
                src={getAssetPath('/assets/logo.png')}
                alt="Eireila Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-serif font-bold text-white tracking-tighter drop-shadow-2xl mb-6 scale-90 md:scale-100">
            EIREILA
          </h1>

          <p className="text-lg md:text-2xl text-white/95 font-medium max-w-xl mx-auto tracking-wide drop-shadow-md bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            Diseño Web Premium & Estrategia Digital
          </p>
        </div>
      </section>

      {/* Corporate Content Flow */}
      <SkillsMarquee />
      <Statistics />

      <div className="relative">
        <About />
        <Process />
      </div>

      <Services />
      <Testimonials />
      <FAQ />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
