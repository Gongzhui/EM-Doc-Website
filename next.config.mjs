import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs',
  latex: true
})

export default withNextra({
  reactStrictMode: true
})
