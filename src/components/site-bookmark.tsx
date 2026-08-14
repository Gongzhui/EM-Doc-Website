type SiteBookmarkProps = {
  href: string;
  title: string;
  description?: string;
  preview: string;
  icon?: string;
};

export function SiteBookmark({
  href,
  title,
  description,
  preview,
  icon
}: SiteBookmarkProps) {
  return (
    <article className="not-prose max-w-3xl">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mb-2 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-foreground no-underline shadow-sm hover:bg-fd-accent"
      >
        {icon ? (
          <img src={icon} alt="" width={16} height={16} className="size-4 rounded-sm" />
        ) : null}
        <span className="font-medium">{title}</span>
      </a>
      {description ? (
        <p className="mb-3 text-sm text-fd-muted-foreground">{description}</p>
      ) : null}
      <img
        src={preview}
        alt={`${title} 首页预览`}
        className="w-full rounded-lg border border-fd-border"
      />
    </article>
  );
}
