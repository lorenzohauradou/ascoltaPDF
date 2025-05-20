import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AscoltaPDF - Converti PDF in Audio Gratuitamente',
  description: 'Trasforma i tuoi documenti PDF in file audio di alta qualità con il nostro convertitore online gratuito. Ascolta i tuoi PDF ovunque, facilmente e velocemente.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
