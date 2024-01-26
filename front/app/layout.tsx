import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./providers/NextAuth";
import Footer from "./components/top/Footer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

const inter = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ヨガ図鑑",
  description: "ヨガのポーズの図鑑を完成させるアプリです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NextAuthProvider>
            <PrimeReactProvider>
                <main className="flex-grow" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navbar />
                  {children}
                </main>
                <Footer />
            </PrimeReactProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
