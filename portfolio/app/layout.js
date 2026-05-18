import { Playfair_Display, Chivo_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const chivoMono = Chivo_Mono({ subsets: ["latin"], variable: "--font-chivo-mono" });

export const metadata = {
  title: "Jermane Jiro Jabson | Architectural Portfolio",
  description: "Architectural Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${chivoMono.variable}`}>
      <body className="bg-canvas text-primary antialiased min-h-screen pt-[80px] font-body-md flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
