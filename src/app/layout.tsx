import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { BRAND_NAME, DESCRIPTION } from '@/data/constants'

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const pokemon = localFont({
  src: './fonts/pokemon_solid.ttf',
  display: 'swap',
  variable: '--font-pokemon',
})

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${pokemon.variable}`}>
      <body
        style={{ margin: 0 }}
        className="bg-stone-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300 antialiased"
      >
        {children}
      </body>
    </html>
  )
}
