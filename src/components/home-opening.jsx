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
}

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
}

export function HomeOpening({ locale = 'zh' }) {
  const copy = locale === 'en' ? en : zh

  return (
    <div className="em-home">
      <section className="vbg-opening" data-layout="split">
        <div className="vbg-opening-claim">
          <h1 className="vbg-title">{copy.title}</h1>
          <p className="vbg-lede">{copy.lede}</p>
        </div>
        <p className="vbg-opening-proof vbg-lede">{copy.proof}</p>
      </section>
      <section className="vbg-section">
        <div className="vbg-comparison">
          {copy.groups.map(group => (
            <div className="vbg-stack" key={group.heading}>
              <h2 className="vbg-heading-20">{group.heading}</h2>
              <ul className="em-stack-list">
                {group.items.map(item => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
