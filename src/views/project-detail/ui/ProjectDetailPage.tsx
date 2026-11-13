import { EngineeringNotes } from '@/widgets/engineering-notes';
import { ProjectGallery } from '@/widgets/project-gallery';
import { ProjectOverview } from '@/widgets/project-overview';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';
import type { ProjectDetailData } from '../model/loadProjectDetail';

export function ProjectDetailPage({ project, notes }: ProjectDetailData) {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectOverview project={project} />
        <ProjectGallery title={project.title} images={project.images} />
        <EngineeringNotes notes={notes} />
      </main>
      <SiteFooter />
    </>
  );
}
