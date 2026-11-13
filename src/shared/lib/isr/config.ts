/**
 * ISR 파이프라인 설정.
 *
 * - REVALIDATE_SECONDS: 시간 기반 재생성 주기. 페이지 세그먼트의 `revalidate`와
 *   데이터 캐시(unstable_cache)의 `revalidate`가 같은 값을 쓴다.
 *   (route segment config는 정적 분석되므로 페이지 파일에는 숫자 리터럴로 적고 이 값과 맞춘다)
 * - CACHE_TAG: Firestore 컬렉션 단위 캐시 태그. /api/revalidate 가 이 태그로 즉시 무효화한다.
 */
export const REVALIDATE_SECONDS = 3600;

export const CACHE_TAG = {
  projects: 'firestore:Project',
  technologies: 'firestore:Technology',
  strengths: 'firestore:Advantage',
  engineeringNotes: 'firestore:EngineeringNotes',
} as const;

export type CacheTag = (typeof CACHE_TAG)[keyof typeof CACHE_TAG];

export const ALL_CACHE_TAGS: CacheTag[] = Object.values(CACHE_TAG);

export function isCacheTag(value: string): value is CacheTag {
  return (ALL_CACHE_TAGS as string[]).includes(value);
}
