import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath', 'lang')

export async function generateMetadata(props) {
  const params = await props.params
  const { mdxPath = [], lang } = params
  const { metadata } = await importPage(mdxPath, lang)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function DocPage(props) {
  const params = await props.params
  const { mdxPath = [], lang } = params
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(mdxPath, lang)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={{ mdxPath, lang }} />
    </Wrapper>
  )
}
