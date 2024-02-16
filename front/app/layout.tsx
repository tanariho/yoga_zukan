import { PrimeReactProvider } from "primereact/api";
import type { Metadata } from "next";
import Head from "next/head";
import { Zen_Maru_Gothic } from "next/font/google";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./providers/NextAuth";
import Footer from "./components/top/Footer";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "./globals.css";
import { ToastProvider } from "./components/context/ToastContext";
import { GoogleAnalytics } from "@next/third-parties/google";

const zen_maru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`),
  title: "ヨガ図鑑",
  description: "ヨガのポーズの図鑑を完成させるアプリです",
  viewport: {
    width: "device-width", 
    initialScale: 1 ,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    url: "https://yoga-zukan.com/",
    title: "ヨガ図鑑",
    description: "ヨガのポーズの図鑑を完成させるアプリです",
    siteName: "ヨガ図鑑",
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
      <link rel="manifest" href="/manifest.json" />
        <link rel="yoga-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#96AA9A" />
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
        <GoogleAnalytics gaId="G-PYFD7CFSK5" />
      </head>
      <body className={zen_maru.className}>
        <ToastProvider>
          <NextAuthProvider>
            <PrimeReactProvider>
              <div className="flex flex-col">
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
              </div>
              <Footer />
            </PrimeReactProvider>
          </NextAuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
