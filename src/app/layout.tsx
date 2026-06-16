import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Oshanodes Agro - Rebuilding the Food System',
  description: 'Oshanodes Agro produces premium rice and beans through sustainable farming practices.',
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
