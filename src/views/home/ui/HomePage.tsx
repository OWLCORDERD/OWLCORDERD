import { AboutDeveloper } from '@/widgets/about-developer';
import { ContactSection } from '@/widgets/contact';
import { FeaturedCase } from '@/widgets/featured-case';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';
import { TechStack } from '@/widgets/tech-stack';
import { WorkIndex } from '@/widgets/work-index';
import type { HomeData } from '../model/loadHomeData';

/** 메인 페이지 조립(서버 컴포넌트). 데이터는 위에서 받아 위젯에 내려주기만 한다. */
export function HomePage({ projects, featured, technologies, strengths }: HomeData) {
  return (
    <>
      <SiteHeader />
      <main>
        <WorkIndex projects={projects} />
        {featured && <FeaturedCase project={featured} />}
        <AboutDeveloper strengths={strengths} />
        <TechStack technologies={technologies} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
