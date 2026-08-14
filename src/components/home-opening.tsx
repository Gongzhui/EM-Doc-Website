import Link from 'next/link';

const zh = {
  title: '微波工程笔记',
  lede: '天线基础、HFSS 与 CST 的操作记录，以及书和软件入口。',
  proof: '公开笔记，按题目查，不按课程表读。',
  groups: [
    {
      heading: 'HFSS',
      items: [
        { href: '/zh/hfss/far-fields-report-sweep', label: 'Far Fields Report 扫参' },
        { href: '/zh/hfss/coax-feeding-notes', label: '同轴馈电要点' },
        { href: '/zh/hfss/create-surface-from-closed-curve', label: '由封闭曲线创建面' },
        { href: '/zh/hfss/skip-validation-steps', label: '跳过检查步骤' },
        { href: '/zh/hfss/field-calculator-guide', label: '场计算器' },
        { href: '/zh/hfss/wave-port-degenerate-modes', label: '波端口简并模式' }
      ]
    },
    {
      heading: 'CST',
      items: [
        { href: '/zh/CST/export-data', label: '导出数据' },
        { href: '/zh/CST/phase-center', label: '查看相位中心' },
        { href: '/zh/CST/cover-curve-to-face', label: '从 Curve 创建 Face' }
      ]
    },
    {
      heading: 'Antenna',
      items: [
        { href: '/zh/antenna_basics/directivity-gain', label: '方向性系数、增益与实际增益' },
        { href: '/zh/antenna_basics/aperture-efficiency', label: '口径与口径效率' },
        { href: '/zh/antenna_basics/microstrip-antenna-feeding', label: '微带天线' }
      ]
    },
    {
      heading: 'Library',
      items: [
        { href: '/zh/books', label: '书籍推荐' },
        { href: '/zh/software_download', label: '软件下载' }
      ]
    }
  ]
};

const en = {
  title: 'Microwave notes',
  lede: 'Antenna fundamentals, HFSS and CST working notes, plus books and software.',
  proof: 'Most notes are in Chinese. English pages are added as they exist.',
  groups: [
    {
      heading: 'Antenna',
      items: [
        {
          href: '/en/antenna-basics/directivity-gain',
          label: 'Directivity, gain, and realized gain'
        }
      ]
    },
    {
      heading: 'Chinese notes',
      items: [
        { href: '/zh/hfss/far-fields-report-sweep', label: 'HFSS' },
        { href: '/zh/CST/export-data', label: 'CST' },
        { href: '/zh/books', label: 'Books and software' }
      ]
    }
  ]
};

export function HomeOpening({ locale = 'zh' }: { locale?: string }) {
  const copy = locale === 'en' ? en : zh;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] md:items-end">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-fd-foreground">{copy.title}</h1>
          <p className="max-w-xl text-lg text-fd-muted-foreground">{copy.lede}</p>
        </div>
        <p className="text-sm leading-6 text-fd-muted-foreground md:text-right">{copy.proof}</p>
      </section>
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {copy.groups.map((group) => (
          <div key={group.heading} className="space-y-3">
            <h2 className="text-sm font-medium text-fd-foreground">{group.heading}</h2>
            <ul className="space-y-2 text-sm">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fd-muted-foreground hover:text-fd-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
