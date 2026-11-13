import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { revalidateSecret } from '@/shared/config/env';
import { ALL_CACHE_TAGS, isCacheTag, type CacheTag } from '@/shared/lib/isr';

/**
 * On-demand 재검증 엔드포인트.
 *
 *   POST /api/revalidate
 *   x-revalidate-secret: <REVALIDATE_SECRET>
 *   body(선택): { "tags": ["firestore:Project"] }   // 생략하면 전체 컬렉션
 *
 * Firestore 데이터를 고친 뒤 호출하면, 해당 태그를 쓰는 페이지는 다음 요청에서
 * 직전 페이지를 내보내면서 백그라운드로 새로 생성된다(stale-while-revalidate, 'max' 프로필).
 */
export async function POST(request: NextRequest) {
  if (!revalidateSecret || request.headers.get('x-revalidate-secret') !== revalidateSecret) {
    return NextResponse.json({ ok: false, message: '인증 토큰이 맞지 않습니다.' }, { status: 401 });
  }

  let requested: unknown;
  try {
    requested = (await request.json())?.tags;
  } catch {
    requested = undefined; // 본문이 없으면 전체 태그
  }

  if (requested !== undefined && !Array.isArray(requested)) {
    return NextResponse.json({ ok: false, message: 'tags 는 문자열 배열이어야 합니다.' }, { status: 400 });
  }

  const tags: CacheTag[] = requested === undefined ? ALL_CACHE_TAGS : requested.filter(isCacheTag);
  const unknown = Array.isArray(requested) ? requested.filter(tag => !isCacheTag(String(tag))) : [];

  if (tags.length === 0) {
    return NextResponse.json(
      { ok: false, message: '알 수 없는 태그입니다.', unknown, allowed: ALL_CACHE_TAGS },
      { status: 400 },
    );
  }

  tags.forEach(tag => revalidateTag(tag, 'max'));

  return NextResponse.json({ ok: true, revalidated: tags, unknown, at: new Date().toISOString() });
}
