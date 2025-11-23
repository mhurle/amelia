import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import PromoBanner from '@/components/PromoBanner'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-serif-alt',
  weight: ['300', '400', '500', '600']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Cove & Ellen - Coastal Essentials',
  description: 'Timeless coastal clothing for the modern woman. Essentials for the coast.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-navy font-sans antialiased">
        <PromoBanner />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}