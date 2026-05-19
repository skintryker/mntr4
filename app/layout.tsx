import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MNTR4 — Minimal Streetwear, Made on Demand',
  description:
    'MNTR4 is a premium minimal streetwear platform. Curated designs, quality basics, and on-demand production — every piece made only when ordered.',
  keywords: ['minimal streetwear', 'on demand', 'MNTR4', 'premium basics', 'curated fashion'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
