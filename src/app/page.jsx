import Link from 'next/link'

export default function IndexPage() {
  return (
    <main
      style={{
        maxWidth: 680,
        margin: '15vh auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      <p style={{ fontSize: 18, opacity: 0.7 }}>Doc Website</p>
      <h1 style={{ fontSize: 48, margin: 0 }}>Nextra 已配置完成</h1>
      <p style={{ opacity: 0.8 }}>
        你可以从示例文档页面开始，继续扩展属于自己的知识库。
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
        <Link
          href="/docs"
          style={{
            padding: '10px 20px',
            borderRadius: 999,
            fontWeight: 600,
            background: 'black',
            color: 'white'
          }}
        >
          查看文档
        </Link>
        <Link
          href="https://nextra.site"
          target="_blank"
          style={{
            padding: '10px 20px',
            borderRadius: 999,
            fontWeight: 600,
            border: '1px solid #e2e8f0'
          }}
        >
          查看 Nextra 文档
        </Link>
      </div>
    </main>
  )
}
