import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { DocImage } from '@/components/doc-image';
import { SiteBookmark } from '@/components/site-bookmark';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: DocImage,
    Image: DocImage,
    SiteBookmark,
    ...components
  } satisfies MDXComponents;
}
