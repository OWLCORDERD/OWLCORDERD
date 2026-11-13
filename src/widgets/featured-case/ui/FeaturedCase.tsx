'use client';

import Link from 'next/link';
import styled from 'styled-components';
import type { Project } from '@/entities/project';
import { media } from '@/shared/styles/media';
import { ButtonRow, Capture, Container, Section, SectionHead } from '@/shared/ui';

interface FeaturedCaseProps {
  project: Project;
}

/**
 * 목록 중 한 프로젝트를 펼친 사례(Bento): 대표 캡처를 가장 크게 두고
 * 사실(기간·유형·기술)과 개요, 두 번째 화면을 크기가 다른 타일로 배치한다.
 */
export function FeaturedCase({ project }: FeaturedCaseProps) {
  const secondShot = project.images.find(src => src && src !== project.projectBanner);

  return (
    <Section aria-labelledby="case-title">
      <Container>
        <SectionHead>
          <h2 id="case-title">{project.title}</h2>
          <p>{project.subTitle}</p>
        </SectionHead>

        <Bento>
          <LeadTile>
            <Capture src={project.projectBanner} alt={`${project.title} 메인 화면`} ratio="16 / 10" />
          </LeadTile>

          <FactsTile>
            <Facts>
              <div>
                <dt>개발 기간</dt>
                <dd>{project.date}</dd>
              </div>
              <div>
                <dt>프로젝트 유형</dt>
                <dd>{project.type}</dd>
              </div>
              {project.useTech.length > 0 && (
                <div>
                  <dt>기술 스택</dt>
                  <dd>
                    <Tags>
                      {project.useTech.map(tech => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </Tags>
                  </dd>
                </div>
              )}
            </Facts>
          </FactsTile>

          <OverviewTile $wide={!secondShot}>
            <p>{project.info}</p>
            <ButtonRow>
              <CaseLink href={`/Project/${project.id}`}>{project.title} 자세히 보기</CaseLink>
            </ButtonRow>
          </OverviewTile>

          {secondShot && (
            <ShotTile>
              <Capture src={secondShot} alt={`${project.title} 하위 화면`} ratio="16 / 9" />
            </ShotTile>
          )}
        </Bento>
      </Container>
    </Section>
  );
}

const Bento = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--gap-columns);

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);

    & > * {
      grid-column: 1 / -1 !important;
    }
  }
`;

const Well = styled.div`
  background: var(--color-paper-2);
  border-radius: var(--radius-card);
  padding: var(--space-xl);

  ${media.sm} {
    padding: var(--space-lg);
  }
`;

const LeadTile = styled.div`
  grid-column: 1 / span 8;
`;

const FactsTile = styled(Well)`
  grid-column: 9 / -1;
`;

const Facts = styled.dl`
  display: grid;
  gap: var(--space-lg);

  div {
    display: grid;
    gap: var(--space-2xs);
    padding-block-end: var(--space-lg);
    border-bottom: var(--rule-hair) solid var(--color-rule);
  }

  div:last-child {
    padding-block-end: 0;
    border-bottom: 0;
  }

  dt {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-muted);
  }

  dd {
    font-variant-numeric: tabular-nums;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  padding-block-start: var(--space-2xs);

  li {
    padding: var(--space-2xs) var(--space-sm);
    background: var(--color-paper-3);
    font-size: var(--text-sm);
  }
`;

const OverviewTile = styled(Well)<{ $wide: boolean }>`
  grid-column: ${({ $wide }) => ($wide ? '1 / -1' : '1 / span 5')};
  display: grid;
  align-content: space-between;
  gap: var(--space-xl);

  p {
    color: var(--color-ink-2);
    max-width: 60ch;
  }
`;

const ShotTile = styled.div`
  grid-column: 6 / -1;
`;

const CaseLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: var(--space-sm) var(--space-lg);
  border: var(--rule-hair) solid var(--color-rule-2);
  color: var(--color-ink);
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--dur-short) var(--ease-out);

  &:hover {
    background: var(--color-paper-3);
  }
`;
