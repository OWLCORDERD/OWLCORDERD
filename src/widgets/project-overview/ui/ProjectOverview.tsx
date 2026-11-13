'use client';

import Link from 'next/link';
import styled from 'styled-components';
import type { Project } from '@/entities/project';
import { SECTION_ID } from '@/shared/config';
import { media } from '@/shared/styles/media';
import { ButtonLink, ButtonRow, Capture, Container, Lead } from '@/shared/ui';

interface ProjectOverviewProps {
  project: Project;
}

/** 상세 페이지 상단: 제목·외부 링크(Banner) → 영상 또는 대표 캡처(Showcase) → 개요와 사실 목록 */
export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <>
      <Wrap aria-labelledby="project-title">
        <Container>
          <Stage>
            <Head>
              <Back href={`/#${SECTION_ID.work}`}>작업 목록으로</Back>
              <h1 id="project-title" className="settle">
                {project.title}
              </h1>
              {project.subTitle && <Lead>{project.subTitle}</Lead>}
              {(project.siteUrl || project.figmaUrl) && (
                <ButtonRow>
                  {project.siteUrl && (
                    <ButtonLink href={project.siteUrl} target="_blank" rel="noreferrer" $variant="primary">
                      사이트 방문하기
                    </ButtonLink>
                  )}
                  {project.figmaUrl && (
                    <ButtonLink href={project.figmaUrl} target="_blank" rel="noreferrer">
                      Figma 디자인 보기
                    </ButtonLink>
                  )}
                </ButtonRow>
              )}
            </Head>

            <Media>
              {project.video ? (
                <video
                  src={project.video}
                  poster={project.projectBanner || undefined}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} 시연 영상`}
                />
              ) : (
                <Capture src={project.projectBanner} alt={`${project.title} 메인 화면`} priority />
              )}
            </Media>
          </Stage>
        </Container>
      </Wrap>

      <DetailsSection aria-labelledby="overview-title">
        <Container>
          <Details>
            <Overview>
              <h2 id="overview-title">프로젝트 개요</h2>
              <p>{project.info}</p>
            </Overview>

            <Facts>
              <div>
                <dt>프로젝트명</dt>
                <dd>
                  {project.title}
                  {project.subTitle && `, ${project.subTitle}`}
                </dd>
              </div>
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
          </Details>
        </Container>
      </DetailsSection>
    </>
  );
}

const Wrap = styled.section`
  padding-block: var(--space-xl) var(--space-2xl);
`;

/** 첫 화면: 왼쪽 1~5열 제목과 액션, 오른쪽 6~12열 영상 또는 대표 캡처 */
const Stage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-xl);
  align-items: center;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const DetailsSection = styled.section`
  padding-block-end: var(--section-gap-s);
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-muted);
  text-decoration: none;
  font-size: var(--text-sm);

  &:hover {
    color: var(--color-ink);
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
  }
`;

const Head = styled.div`
  grid-column: 1 / span 5;
  display: grid;
  gap: var(--space-lg);
  justify-items: start;

  h1 {
    max-width: none;
  }

  ${media.md} {
    grid-column: 1;
  }
`;

const Media = styled.div`
  grid-column: 6 / -1;

  video {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: var(--color-graphite);
    border: var(--rule-hair) solid var(--color-rule-2);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-frame);
  }

  ${media.md} {
    grid-column: 1;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
  gap: var(--space-3xl);
  padding-block-start: var(--space-2xl);
  border-top: var(--rule-hair) solid var(--color-rule);

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-2xl);
  }
`;

const Overview = styled.div`
  display: grid;
  gap: var(--space-lg);
  align-content: start;

  h2 {
    font-size: var(--text-title);
  }

  p {
    color: var(--color-ink-2);
    max-width: 62ch;
    white-space: pre-line;
  }
`;

const Facts = styled.dl`
  border-top: var(--rule-hair) solid var(--color-rule);

  div {
    display: grid;
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: var(--space-md);
    padding-block: var(--space-md);
    border-bottom: var(--rule-hair) solid var(--color-rule);
  }

  dt {
    font-size: var(--text-sm);
    font-family: var(--font-display);
    font-weight: var(--title-weight);
    color: var(--color-muted);
    padding-block-start: var(--space-3xs);
  }

  dd {
    font-variant-numeric: tabular-nums;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);

  li {
    padding: var(--space-2xs) var(--space-sm);
    background: var(--color-paper-2);
    border: var(--rule-hair) solid var(--color-rule);
    border-radius: var(--radius-input);
    font-size: var(--text-sm);
  }
`;
