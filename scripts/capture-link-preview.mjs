import { execFileSync } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

function loadChromium() {
  try {
    return createRequire(import.meta.url)('playwright').chromium;
  } catch {
    const bin = execFileSync('sh', ['-c', 'command -v playwright'], {
      encoding: 'utf8'
    }).trim();
    const cli = realpathSync(bin);
    return createRequire(cli)(dirname(cli)).chromium;
  }
}

const chromium = loadChromium();

async function dismissOverlays(page) {
  const labels = [
    /use limited/i,
    /reject all/i,
    /only necessary/i,
    /accept all/i,
    /allow analytics/i,
    /got it/i,
    /agree/i,
    /accept/i,
    /仅必要/i,
    /拒绝/i,
    /同意/i
  ];

  for (const name of labels) {
    const button = page.getByRole('button', { name });
    if ((await button.count()) === 0) continue;
    await button.first().click({ timeout: 2000 }).catch(() => {});
    break;
  }

  await page.evaluate(() => {
    for (const el of document.querySelectorAll('[role="dialog"], [aria-modal="true"]')) {
      el.remove();
    }
  });
}

const url = process.argv[2];
const outfile = process.argv[3];

if (!url || !outfile) {
  console.error('usage: node scripts/capture-link-preview.mjs <url> <outfile>');
  process.exit(1);
}

const outPath = resolve(outfile);

const browser = await chromium.launch({
  headless: true
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
  reducedMotion: 'reduce'
});

await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
await page.evaluate(() => document.fonts.ready);
await dismissOverlays(page);
await new Promise((resolve) => setTimeout(resolve, 1500));

await mkdir(dirname(outPath), { recursive: true });
await page.screenshot({
  path: outPath,
  type: outPath.endsWith('.png') ? 'png' : 'jpeg',
  quality: outPath.endsWith('.png') ? undefined : 90,
  animations: 'disabled',
  caret: 'hide',
  scale: 'device'
});

await browser.close();
console.log(outPath);
