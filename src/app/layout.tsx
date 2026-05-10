import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TJX Oaxaca Travel | Vuelos, Hoteles y Tours desde Tijuana",
  description: "Descubre Oaxaca saliendo desde Tijuana con ofertas únicas y experiencias inolvidables. Vuelos baratos, hoteles premium y tours exclusivos.",
  keywords: "Agencia de viajes Tijuana Oaxaca, Vuelos baratos Tijuana Oaxaca, Tours Oaxaca desde Tijuana, Viajes Oaxaca promociones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
