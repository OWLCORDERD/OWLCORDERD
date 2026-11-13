import 'server-only';
import { unstable_cache } from 'next/cache';
import { isFirebaseConfigured } from '../../api/firebase';
import { REVALIDATE_SECONDS, type CacheTag } from './config';

interface CachedQueryOptions<T> {
  /** 캐시 키. 컬렉션 이름처럼 쿼리마다 고유해야 한다. */
  key: string;
  /** on-demand 무효화에 쓰는 태그 */
  tag: CacheTag;
  /** Firebase 설정이 없을 때(로컬 미설정 등) 돌려줄 값 */
  fallback: T;
}

/**
 * Firestore 조회를 Next 데이터 캐시에 올리는 래퍼.
 *
 * 실패 처리 원칙
 * - 환경 변수가 없으면 fallback을 돌려준다. 설정 누락은 빌드를 막지 않되 경고를 남긴다.
 * - Firestore 조회 자체가 실패하면 예외를 그대로 던진다.
 *   빌드 중이면 빌드가 실패하고, ISR 재생성 중이면 Next가 직전에 만든 페이지를 계속 내보낸다.
 *   (실패를 빈 배열로 삼키면 정상 페이지가 빈 페이지로 덮어써진다)
 */
export function cachedQuery<T>(query: () => Promise<T>, { key, tag, fallback }: CachedQueryOptions<T>) {
  const cached = unstable_cache(query, ['firestore', key], {
    tags: [tag],
    revalidate: REVALIDATE_SECONDS,
  });

  return async (): Promise<T> => {
    if (!isFirebaseConfigured) {
      console.warn(`[isr] Firebase 환경 변수가 없어 "${key}" 조회를 건너뜁니다. .env.example 을 참고하세요.`);
      return fallback;
    }
    return cached();
  };
}
