import 'server-only';
import { collection, getDocs } from 'firebase/firestore/lite';
import { firestore } from '@/shared/api';
import { str } from '@/shared/lib/firestore';
import { CACHE_TAG } from '@/shared/lib/isr';
import { cachedQuery } from '@/shared/lib/isr/server';
import type { Strength } from '../model/types';

async function fetchStrengths(): Promise<Strength[]> {
  const snapshot = await getDocs(collection(firestore(), 'Advantage'));

  return snapshot.docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, title: str(data.title), info: str(data.info), svgIcon: str(data.svgIcon) };
  });
}

export const getStrengths = cachedQuery(fetchStrengths, {
  key: 'Advantage',
  tag: CACHE_TAG.strengths,
  fallback: [] as Strength[],
});
