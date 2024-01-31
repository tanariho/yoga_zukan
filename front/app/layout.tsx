import { PrimeReactProvider } from "primereact/api";
import type { Metadata } from "next";
import Head from "next/head";
import { Inconsolata } from "next/font/google";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./providers/NextAuth";
import Footer from "./components/top/Footer";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "./globals.css";
import { ToastProvider } from "./components/context/ToastContext";

const inter = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`),
  title: "ヨガ図鑑",
  description: "ヨガのポーズの図鑑を完成させるアプリです",
  openGraph: {
    title: "ヨガ図鑑",
    description: "ヨガに触れて、ヨガポーズの図鑑を完成させるアプリです。",
  },
  twitter: {
    title: "ヨガ図鑑",
    description: "ヨガに触れて、ヨガポーズの図鑑を完成させるアプリです。",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <ToastProvider>
            <NextAuthProvider>
              <PrimeReactProvider>
                <main
                  className="flex-grow"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                  }}
                >
                  <Navbar />
                  {children}
                </main>
                <Footer />
              </PrimeReactProvider>
            </NextAuthProvider>
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}