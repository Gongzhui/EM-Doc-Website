import type { ReactNode } from 'react';

export function SiteCategory({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="not-prose my-10">
      <h2 className="mb-5 text-lg font-semibold tracking-tight text-fd-foreground">
        {title}
      </h2>
      <div className="space-y-10">{children}</div>
    </section>
  );
}
