import { Analytics } from '@vercel/analytics/next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: {
    template: '%s – Microwiki',
    default: 'Microwiki'
  },
  description: '一个微波工程资料库。'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📘" />
      <body>
        <Layout
          navbar={<Navbar logo={<strong>Microwiki</strong>} />}
          footer={<Footer>Mircowiki © {new Date().getFullYear()}</Footer>}
          docsRepositoryBase="https://github.com/chenyansong/doc-website"
          editLink={null}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
