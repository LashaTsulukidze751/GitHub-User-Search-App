import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Space_Mono({ weight:['400','700'], subsets:['latin-ext']  })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 `}>{children}</body>
    </html>
  )
}
