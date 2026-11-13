import type { MetadataRoute } from 'next';
import { SITE } from '@/shared/config';
import { listProjectIds } from '@/views/project-detail/server';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids = await listProjectIds();

  return [
    { url: SITE.url, changeFrequency: 'monthly', priority: 1 },
    ...ids.map(id => ({
      url: `${SITE.url}/Project/${id}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
