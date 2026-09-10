import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { resourcesData } from '@/lib/data/resources';
import { ResourceDetailClient } from '@/components/sections/ResourceDetailClient';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return resourcesData.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = resourcesData.find((c) => c.slug === params.slug);
  if (!card) return {};
  return {
    title: `${card.title} — Gargi Treasure`,
    description: card.description,
  };
}

export default function ResourceDetailPage({ params }: Props) {
  const card = resourcesData.find((c) => c.slug === params.slug);
  if (!card) notFound();

  return <ResourceDetailClient card={card} />;
}
