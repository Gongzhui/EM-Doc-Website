import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  return (
    <Layout
      navbar={
        <Navbar
          logo={<span className="em-identity">EM</span>}
          logoLink={`/${lang}`}
        />
      }
      footer={
        <Footer>
          <span className="em-footer-inner">
            <span className="em-identity">EM</span>
            <span className="em-footer-meta">Microwave notes</span>
          </span>
        </Footer>
      }
      docsRepositoryBase="https://github.com/Gongzhui/EM-Doc-Website"
      editLink={null}
      feedback={{ content: null }}
      copyPageButton={false}
      darkMode={false}
      toc={{
        title: 'On this page',
        backToTop: null
      }}
      nextThemes={{
        attribute: 'class',
        defaultTheme: 'system',
        disableTransitionOnChange: true
      }}
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      search={<Search placeholder="Search Docs…" />}
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
