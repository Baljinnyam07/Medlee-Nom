import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Open_Sans } from "next/font/google";


const inter = Inter({ subsets: ['latin'] })

const openSans = Open_Sans({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Medlee</title>
        <meta name='description' content='Description'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
