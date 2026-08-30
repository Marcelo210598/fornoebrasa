import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forno & Brasa — Cardápio Digital",
  description:
    "Pizzaria e hamburgeria artesanal. Massa de fermentação natural, forno a lenha e blend 180g na chapa. Peça pelo cardápio digital.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
