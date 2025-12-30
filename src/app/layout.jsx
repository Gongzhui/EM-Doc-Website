import { Analytics } from '@vercel/analytics/next'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: {
    template: '%s – Microwiki',
    default: 'Microwiki'
  },
  description: '一个微波工程资料库。'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📘" />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
