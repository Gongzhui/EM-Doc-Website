import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { DocImage } from './src/components/doc-image'
import { HomeOpening } from './src/components/home-opening'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  img: DocImage,
  Image: DocImage,
  HomeOpening,
  ...components
})
