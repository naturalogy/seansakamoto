import type { Metadata } from 'next'
import { Noto_Serif_JP, Ephesis, Raleway } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    default: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

type RootLayoutProps = {
  children: React.ReactNode
}

// Load Noto Serif JP font
const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
})

// Load Ephesis font for signature style
const ephesis = Ephesis({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ephesis',
})

// Load Raleway font
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

/**
 * Root layout
 * Sets up locale, global styles and font.
 */

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      className={`${raleway.variable} ${notoSerifJP.variable} ${ephesis.variable}`}>
      <body>{children}</body>
    </html>
  )
}
