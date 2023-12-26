import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import Navbar from './components/Navbar'
import NextAuthProvider from './providers/NextAuth';
import Footer from './components/top/Footer';

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: 'ヨガ図鑑',
  description: 'ヨガのポーズの図鑑を完成させるアプリです',
};

export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
          < Navbar />
          <NextAuthProvider>
          {children}
          </NextAuthProvider>
          < Footer />
      </body>
    </html>
  )
}
