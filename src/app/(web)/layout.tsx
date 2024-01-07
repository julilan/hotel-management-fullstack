import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover and book the best hotel rooms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <main className='font-normal'>
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
