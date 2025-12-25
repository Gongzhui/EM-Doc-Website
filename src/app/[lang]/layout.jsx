import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  return (
    <Layout
      navbar={<Navbar logo={<strong>Microwiki</strong>} />}
      footer={<Footer>Mircowiki (c) {new Date().getFullYear()}</Footer>}
      docsRepositoryBase="https://github.com/chenyansong/doc-website"
      editLink={null}
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      pageMap={pageMap}
      i18n={[
        { locale: 'zh', name: '中文' },
        { locale: 'en', name: 'English' }
      ]}
    >
      {children}
    </Layout>
  )
}
