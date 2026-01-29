import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eireila | Desarrollo Web & Diseño",
  description: "Portafolio profesional de Eireila Montanero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-black text-gray-900 font-sans`}
      >
        {/* Global Blurred Background (User's Banner) */}
        <div className="fixed inset-0 min-h-screen w-full -z-50 overflow-hidden">
          <Image
            src={getAssetPath('/assets/banner.png')}
            alt="Background Palette"
            fill
            sizes="100vw"
            className="object-cover blur-[80px] opacity-60 scale-110" // Heated blur for color wash
            priority
          />
          {/* Noise Texture Overlay for Aesthetic Feel */}
          <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
