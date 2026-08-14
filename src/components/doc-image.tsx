import type { ComponentProps } from 'react';

function normalizeWidth(width: unknown) {
  if (typeof width === 'number') {
    return `${width}px`;
  }

  if (typeof width === 'string' && width.length > 0) {
    return width;
  }

  return 'min(100%, 42rem)';
}

function normalizeSrc(src: unknown) {
  if (typeof src === 'string') {
    return src;
  }

  if (src && typeof src === 'object' && 'src' in src && typeof src.src === 'string') {
    return src.src;
  }

  return '';
}

type DocImageProps = ComponentProps<'img'> & {
  width?: string | number;
};

export function DocImage({
  alt = '',
  src,
  width,
  height: _height,
  style,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: DocImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      src={normalizeSrc(src)}
      loading={loading}
      decoding={decoding}
      style={{
        display: 'block',
        width: normalizeWidth(width),
        maxWidth: '100%',
        height: 'auto',
        marginInline: 'auto',
        ...style
      }}
    />
  );
}
