import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./_components/hearder/header-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DGS Sound Alto Falantes Automotivos",
  description:
    "Assistência Técnica especializada em Alto Falantes automotivos e recondicionados,  Trabalhamos com Médio Grave, Woofer e Subwoofer; Alto Falantes Novos e Recondicionados",
  keywords:
    "assistência técnica, alto falantes automotivos, falantes, Médio Grave, Woofer e Subwoofer; Alto Falantes, reparos",
  icons: {
    icon: ["/dgsLogo.jpg"],
    apple: ["/dgsLogo.jpg"],
    shortcut: ["dgsLogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
