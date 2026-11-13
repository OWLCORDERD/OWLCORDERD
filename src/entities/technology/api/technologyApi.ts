import 'server-only';
import { collection, getDocs } from 'firebase/firestore/lite';
import { firestore } from '@/shared/api';
import { str } from '@/shared/lib/firestore';
import { CACHE_TAG } from '@/shared/lib/isr';
import { cachedQuery } from '@/shared/lib/isr/server';
import type { Technology, TechnologyCategory } from '../model/types';

const toCategory = (value: string): TechnologyCategory => (value === 'design' ? 'design' : 'develop');

async function fetchTechnologies(): Promise<Technology[]> {
  const snapshot = await getDocs(collection(firestore(), 'Technology'));

  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: str(data.title),
      info: str(data.info),
      svgIcon: str(data.svgIcon),
      type: toCategory(str(data.type)),
    };
  });
}

export const getTechnologies = cachedQuery(fetchTechnologies, {
  key: 'Technology',
  tag: CACHE_TAG.technologies,
  fallback: [] as Technology[],
});
