import type { Metadata } from "next";
import { Footer, Header } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fichaje SaaS | Control Horario Legal en España",
  description: "Plataforma profesional de control horario y fichaje que cumple con la normativa laboral española. Sistema fichaje en Barcelona y toda España con cumplimiento RGPD y R.D. 1741/1998.",
  keywords: "control horario, fichaje, sistema fichaje, Barcelona, España, RGPD, cumplimiento legal"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-black flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
