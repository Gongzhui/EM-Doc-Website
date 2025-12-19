# EM Doc Website

这是一个基于 Next.js + Nextra 的电磁/天线文档站点。

## 主要内容

- 方向性系数、增益与实际增益
- 口径与口径效率
- 微带天线结构与馈电方式

## 开发与运行

- 本地开发：`bun dev`
- 构建：`bun run build`
- 启动：`bun run start`

## 添加新文章

1. 在 `src/content` 下新增 `.mdx` 文件。
   - 如果需要归类到“天线基础知识”，放到 `src/content/antenna-basics/`。
2. 在对应的 `_meta.js` 里加入导航项。
   - 根导航：`src/content/_meta.js`
   - 分类导航：`src/content/antenna-basics/_meta.js`
3. 如需插图，把图片放在 `public/images/docs/`，在 MDX 中使用 Next.js Image：

```mdx
import Image from 'next/image'

<Image
  src="/images/docs/your-image.png"
  alt="说明文字"
  width={800}
  height={450}
/>
```

## 目录结构（节选）

- `src/content/` 文档内容
- `src/content/_meta.js` 根导航
- `src/content/antenna-basics/` 文章分类
- `public/images/docs/` 文档图片
