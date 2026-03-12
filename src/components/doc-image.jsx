const normalizeWidth = width => {
  if (typeof width === 'number') {
    return `${width}px`
  }

  return width || 'min(100%, 42rem)'
}

const normalizeSrc = src => {
  if (typeof src === 'string') {
    return src
  }

  if (src && typeof src === 'object' && typeof src.src === 'string') {
    return src.src
  }

  return ''
}

export function DocImage({
  alt = '',
  src,
  width,
  height: _height,
  style,
  loading = 'lazy',
  decoding = 'async',
  ...props
}) {
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
  )
}
