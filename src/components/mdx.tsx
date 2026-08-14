import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { DocImage } from '@/components/doc-image';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: DocImage,
    Image: DocImage,
    ...components
  } satisfies MDXComponents;
}
