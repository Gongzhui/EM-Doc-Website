# EM

个人微波工程笔记，地址 [em.gongzhui.me](https://em.gongzhui.me)。

栈是 Next.js + Fumadocs，中英双语。正文在 `content/docs/`。

## 开发

- 本地：`bun dev`
- 构建：`bun run build`
- 启动：`bun run start`

## 加文章

1. 在 `content/docs/zh/` 或 `content/docs/en/` 下新增 `.mdx`。
2. 在对应目录的 `meta.json` 里加入导航项。
3. 插图放 `public/images/docs/`，MDX 里用：

```mdx
<Image
  src="/images/docs/your-image.png"
  alt="说明文字"
  width={800}
/>
```
