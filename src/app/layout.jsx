import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'
import '../styles/vercel-brand.css'
import '../styles/em-theme.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata = {
  title: {
    template: '%s – EM',
    default: 'EM'
  },
  description: '一个微波工程资料库。',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
      data-theme="auto"
      className={`vbg-report ${geistSans.variable} ${geistMono.variable}`}
    >
      <Head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
