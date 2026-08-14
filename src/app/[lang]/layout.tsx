import { Analytics } from '@vercel/analytics/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { i18n } from '@/lib/i18n';
import { translations } from '@/lib/layout.shared';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: {
    template: '%s – Gongzhui',
    default: 'Gongzhui Wiki'
  },
  description: 'Gongzhui 的公开笔记。',
  icons: {
    icon: '/favicon.svg?v=2'
  }
};

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function Layout({
  params,
  children
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider i18n={i18nProvider(translations, lang)}>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
