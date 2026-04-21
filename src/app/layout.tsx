import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fichaje Brutalista",
  description: "SaaS de control horario para empresas espanolas"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
