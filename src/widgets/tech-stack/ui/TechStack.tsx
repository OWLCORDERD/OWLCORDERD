'use client';

import { TechnologyGrid, type Technology } from '@/entities/technology';
import { TechCategorySwitcher } from '@/features/switch-tech-category';
import { SECTION_ID } from '@/shared/config';
import { Container, Section, SectionHead } from '@/shared/ui';

interface TechStackProps {
  technologies: Technology[];
}

/** 기술 스택: Develop / Design 전환(Switcher) 아래 항목 그리드 */
export function TechStack({ technologies }: TechStackProps) {
  const develop = technologies.filter(item => item.type === 'develop');
  const design = technologies.filter(item => item.type === 'design');

  return (
    <Section id={SECTION_ID.stack} aria-labelledby="stack-title" $top="l">
      <Container>
        <SectionHead>
          <h2 id="stack-title">작업에 쓰는 기술</h2>
          <p>개발과 디자인 도구를 나눠 정리했습니다.</p>
        </SectionHead>

        <TechCategorySwitcher
          label="기술 분류"
          panels={{
            develop: <TechnologyGrid items={develop} />,
            design: <TechnologyGrid items={design} />,
          }}
        />
      </Container>
    </Section>
  );
}
