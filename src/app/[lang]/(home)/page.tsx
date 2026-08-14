import { HomeOpening } from '@/components/home-opening';

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <HomeOpening locale={lang} />;
}
