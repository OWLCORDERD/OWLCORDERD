import 'server-only';
import type { Project } from '@/entities/project';
import { getProjects } from '@/entities/project/server';
import type { Strength } from '@/entities/strength';
import { getStrengths } from '@/entities/strength/server';
import type { Technology } from '@/entities/technology';
import { getTechnologies } from '@/entities/technology/server';

export interface HomeData {
  projects: Project[];
  /** 펼쳐 보여줄 대표 프로젝트: 목록 첫 번째(index 최솟값) */
  featured: Project | null;
  technologies: Technology[];
  strengths: Strength[];
}

/**
 * 메인 페이지 데이터 파이프라인.
 *
 * 기존 CRA에서는 컴포넌트마다 useSWR로 브라우저에서 Firestore를 따로 조회했다(3회 + 로딩 스피너).
 * 이제 페이지 생성 시점(빌드 / ISR 재생성)에 서버에서 세 컬렉션을 병렬로 한 번에 불러와
 * 완성된 HTML로 내려보낸다. 각 조회는 컬렉션 태그가 달린 데이터 캐시를 거치므로
 * /api/revalidate 로 바뀐 컬렉션만 골라 무효화할 수 있다.
 */
export async function loadHomeData(): Promise<HomeData> {
  const [projects, technologies, strengths] = await Promise.all([getProjects(), getTechnologies(), getStrengths()]);

  return {
    projects,
    featured: projects[0] ?? null,
    technologies,
    strengths,
  };
}
