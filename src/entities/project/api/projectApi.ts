import 'server-only';
import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { firestore } from '@/shared/api';
import { num, str, strList } from '@/shared/lib/firestore';
import { CACHE_TAG } from '@/shared/lib/isr';
import { cachedQuery } from '@/shared/lib/isr/server';
import type { Project } from '../model/types';

async function fetchProjects(): Promise<Project[]> {
  const snapshot = await getDocs(query(collection(firestore(), 'Project'), orderBy('index', 'asc')));

  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      index: num(data.index),
      title: str(data.title),
      subTitle: str(data.subTitle),
      date: str(data.date),
      info: str(data.info),
      projectBanner: str(data.projectBanner),
      type: str(data.type),
      useTech: strList(data.useTech),
      video: str(data.video),
      figmaUrl: str(data.figmaUrl),
      siteUrl: str(data.siteUrl),
      images: strList(data.images),
    };
  });
}

/** 전체 프로젝트 (index 오름차순). ISR 데이터 캐시를 거친다. */
export const getProjects = cachedQuery(fetchProjects, {
  key: 'Project',
  tag: CACHE_TAG.projects,
  fallback: [] as Project[],
});

/** 단건 조회. 전체 목록 캐시를 재사용해 Firestore 읽기 횟수를 늘리지 않는다. */
export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(project => project.id === id);
}
