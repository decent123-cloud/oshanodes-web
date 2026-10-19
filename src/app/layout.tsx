import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Oshanodes Agro - Transforming Staple Foods',
  description: 'Oshanodes transforms locally produced crops into improved staple foods through consumer-led innovation.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Oshanodes Agro - Transforming Staple Foods',
    description: 'Oshanodes transforms locally produced crops into improved staple foods through consumer-led innovation.',
    type: 'website',
    images: [
      { url: '/images/brand/rice_farm.png', alt: 'Oshanodes Agro rice farm' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oshanodes Agro',
    description: 'Transforming staple foods through consumer-driven innovation.',
    images: ['/images/brand/rice_farm.png']
  }
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({children}:{children:ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
