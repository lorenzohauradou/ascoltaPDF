import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Converti PDF in Audio',
  description: 'Convertitore di  PDF in Audio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
