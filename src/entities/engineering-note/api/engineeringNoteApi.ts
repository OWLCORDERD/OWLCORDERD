import 'server-only';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDownloadURL, ref } from 'firebase/storage';
import { firestore, storage } from '@/shared/api';
import { str, strList } from '@/shared/lib/firestore';
import { CACHE_TAG } from '@/shared/lib/isr';
import { cachedQuery } from '@/shared/lib/isr/server';
import type { EngineeringNote } from '../model/types';

/** Storage 경로를 다운로드 URL로 바꾼다. 파일이 없거나 권한이 없으면 null을 돌려주고 페이지 생성은 계속한다. */
async function resolveDownloadUrl(filePath: string): Promise<string | null> {
  if (!filePath) return null;
  if (/^https?:\/\//.test(filePath)) return filePath;
  try {
    return await getDownloadURL(ref(storage(), filePath));
  } catch (error) {
    console.warn(`[isr] 기술 문서 경로를 해석하지 못했습니다: ${filePath}`, error);
    return null;
  }
}

async function fetchEngineeringNotes(): Promise<EngineeringNote[]> {
  const snapshot = await getDocs(collection(firestore(), 'EngineeringNotes'));

  return Promise.all(
    snapshot.docs.map(async doc => {
      const data = doc.data();
      const filePath = str(data.filePath);
      return {
        id: doc.id,
        projectId: str(data.id),
        title: str(data.title),
        info: str(data.info),
        technology: strList(data.technology),
        filePath,
        downloadUrl: await resolveDownloadUrl(filePath),
      };
    }),
  );
}

const getEngineeringNotes = cachedQuery(fetchEngineeringNotes, {
  key: 'EngineeringNotes',
  tag: CACHE_TAG.engineeringNotes,
  fallback: [] as EngineeringNote[],
});

/** 특정 프로젝트의 기여 이력. 기존 클라이언트 로직(전체 조회 후 필터)을 서버 캐시 위에서 수행한다. */
export async function getEngineeringNotesByProject(projectId: string): Promise<EngineeringNote[]> {
  const notes = await getEngineeringNotes();
  return notes.filter(note => note.projectId === projectId);
}
