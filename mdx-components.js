import { Image } from 'nextra/components'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()
const centeredImg = props => (
  <Image
    {...props}
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      ...(props.style || {})
    }}
  />
)

export const useMDXComponents = components => ({
  ...docsComponents,
  img: centeredImg,
  ...components
})
