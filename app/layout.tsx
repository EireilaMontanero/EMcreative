import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { LanguageProvider } from "@/lib/LanguageContext";

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
  keywords: [
    "Eireila Montanero", "Eireila", "Montanero",
    "Eirela Montanero", "Eirela", "Ireila", "Ireili",
    "Eyreila", "Aireila", "Reila", "Eireli", "Eirely",
    "Eirelia Montanera", "Eirella", "Eirela Montanero",
    "Eireila Diseño Web", "Eireila Brand", "Eireila Portfolio",
    "Diseño Web Beige", "Diseño Web Coquette", "Diseño Web Minimalista",
    "Web Designer Venezuela", "Premium Web Design"
  ],
  verification: {
    google: [
      "6Pp8A-WntSt0nsJTaxLvT-p_uGfGliFABMGJprUDufI",
      "9_o6tzAY6Lvp-1_pkS3Kn9V1xneBhqIZha3ksgGdP6s"
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased text-stone-900 bg-[#FAF9F6]`}>
        <LanguageProvider>
          {/* Global Blurred Background (User's Banner) */}
          <div className="fixed inset-0 min-h-screen w-full -z-50 overflow-hidden">
            <Image
              src={getAssetPath('/assets/banner.png')}
              alt="Background Palette"
              fill
              sizes="100vw"
              className="object-cover blur-[100px] opacity-40 scale-125 transition-all duration-1000"
              priority
            />
            {/* Premium Noise / Grain Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 contrast-150 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-white/10 mix-blend-soft-light pointer-events-none"></div>
          </div>

          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
