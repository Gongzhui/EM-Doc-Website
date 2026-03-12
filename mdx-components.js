import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { DocImage } from './src/components/doc-image'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  img: DocImage,
  Image: DocImage,
  ...components
})
