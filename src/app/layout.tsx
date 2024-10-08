import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clon de biggie',
  description: 'Clon de biggie con next js y shad cn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <main className="max-w-[1785px] w-full mx-auto flex-1">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
