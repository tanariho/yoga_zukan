import type { Metadata } from 'next'
import { Inconsolata} from 'next/font/google'
import './globals.css'

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ヨガ図鑑',
  description: 'ヨガのポーズの図鑑を完成させるアプリです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
