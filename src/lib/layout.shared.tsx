import { Logo } from '@/components/logo';
import { zhCN } from '@fumadocs/language/zh-cn';
import { i18n } from '@/lib/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { uiTranslations } from 'fumadocs-ui/i18n';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset('zh', zhCN())
  .add({
    zh: {
      displayName: '中文'
    },
    en: {
      displayName: 'English'
    }
  });

export function baseOptions(locale: string): BaseLayoutProps {
  const isZh = locale === 'zh';

  return {
    nav: {
      title: (
        <>
          <Logo className="size-5" />
          Gongzhui
        </>
      ),
      url: `/${locale}`
    },
    githubUrl: 'https://github.com/Gongzhui/EM-Doc-Website',
    links: isZh
      ? [
          {
            text: 'HFSS',
            url: '/zh/hfss/far-fields-report-sweep'
          },
          {
            text: 'CST',
            url: '/zh/CST/export-data'
          },
          {
            text: '天线',
            url: '/zh/antenna_basics/directivity-gain'
          },
          {
            text: '书籍',
            url: '/zh/books'
          }
        ]
      : [
          {
            text: 'Antenna',
            url: '/en/antenna-basics/directivity-gain'
          },
          {
            text: '中文笔记',
            url: '/zh/hfss/far-fields-report-sweep'
          }
        ]
  };
}
