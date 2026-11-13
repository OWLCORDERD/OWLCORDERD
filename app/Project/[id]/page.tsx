import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE } from '@/shared/config';
import { ProjectDetailPage } from '@/views/project-detail';
import { listProjectIds, loadProjectDetail } from '@/views/project-detail/server';

// 기존 URL(/Project/:id)을 그대로 유지한다.
export const revalidate = 3600;
// 빌드 이후 Firestore에 추가된 프로젝트도 첫 요청 때 생성해 캐시한다.
export const dynamicParams = true;

type Params = { id: string };

export async function generateStaticParams(): Promise<Params[]> {
  const ids = await listProjectIds();
  return ids.map(id => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const data = await loadProjectDetail(id);
  if (!data) return { title: '찾는 프로젝트가 없습니다' };

  const { project } = data;
  const description = `${project.title} 프로젝트는 ${project.subTitle}입니다. 프로젝트 소개와 구현한 화면, 주요 기여 이력을 확인할 수 있습니다.`;

  return {
    title: `${project.title} 프로젝트`,
    description,
    alternates: { canonical: `/Project/${project.id}` },
    openGraph: {
      type: 'article',
      title: `${project.title} 프로젝트 · ${SITE.owner}`,
      description,
      images: project.projectBanner ? [{ url: project.projectBanner, alt: `${project.title} 메인 화면` }] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const data = await loadProjectDetail(id);
  if (!data) notFound();

  return <ProjectDetailPage {...data} />;
}
