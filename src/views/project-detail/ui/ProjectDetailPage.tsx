import { EngineeringNotes } from '@/widgets/engineering-notes';
import { ProjectGallery } from '@/widgets/project-gallery';
import { ProjectOverview } from '@/widgets/project-overview';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';
import type { ProjectDetailData } from '../model/loadProjectDetail';
import ScrollToTopOnMount from './ScrollToTopOnMount';

export function ProjectDetailPage({ project, notes }: ProjectDetailData) {
  return (
    <>
      <ScrollToTopOnMount id={project.id} />
      <SiteHeader />
      <main>
        <ProjectOverview project={project} />
        <ProjectGallery title={project.title} images={project.images} />
        {/* 회사 프로젝트만 주요 기여 이력 노출 */}
        {project.type === 'company' && <EngineeringNotes notes={notes} />}
      </main>
      <SiteFooter />
    </>
  );
}
