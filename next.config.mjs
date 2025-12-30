import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  unstable_shouldAddLocaleToLinks: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh'
  }
})
