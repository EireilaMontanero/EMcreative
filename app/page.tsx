import Navbar from '@/components/ui/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Image from 'next/image'

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
          <source src={process.env.NODE_ENV === 'production' ? '/EMcreative/assets/fondovideo.mp4' : '/assets/fondovideo.mp4'} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center max-w-4xl text-center">
          {/* Logo Container - Glass Effect */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-full mb-10 shadow-2xl animate-fade-in-up">
            <div className="relative flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Eireila Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-xl mb-6">
            EIREILA
          </h1>

          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-xl mx-auto tracking-wide drop-shadow-md bg-black/30 backdrop-blur-sm p-4 rounded-xl">
            Diseño Web & Experiencias Digitales
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <About />
      <Services />
      <Contact />

      <footer className="py-8 bg-white/30 backdrop-blur-md text-black font-bold text-center text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Eireila Montanero</p>
      </footer>
    </main>
  )
}
