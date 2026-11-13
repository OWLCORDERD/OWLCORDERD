import { HomePage } from '@/views/home';
import { loadHomeData } from '@/views/home/server';

/**
 * ISR: 빌드 시 정적으로 생성하고, 최대 1시간마다 백그라운드에서 다시 생성한다.
 * (값은 src/shared/lib/isr/config.ts 의 REVALIDATE_SECONDS 와 맞춘다. segment config는 리터럴이어야 한다)
 * 즉시 반영이 필요하면 POST /api/revalidate 로 컬렉션 태그를 무효화한다.
 */
export const revalidate = 3600;

export default async function Page() {
  const data = await loadHomeData();
  return <HomePage {...data} />;
}
