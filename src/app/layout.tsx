import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Oshanodes Agro - Rebuilding the Food System',
  description: 'Oshanodes Agro produces premium rice and beans through sustainable farming practices.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Oshanodes Agro - Rebuilding the Food System',
    description: 'Oshanodes Agro produces premium rice and beans through sustainable farming practices.',
    type: 'website',
    images: [
      { url: '/images/oshanodes 1.jpg', alt: 'Oshanodes Agro rice farm' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oshanodes Agro',
    description: 'Rebuilding the food system through sustainable agriculture.',
    images: ['/images/oshanodes 1.jpg']
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
