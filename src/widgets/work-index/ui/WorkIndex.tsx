'use client';

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import styled from 'styled-components';
import type { Project } from '@/entities/project';
import { SECTION_ID, SITE } from '@/shared/config';
import { media } from '@/shared/styles/media';
import { ButtonLink, ButtonRow, Capture, Container, Lead, VisuallyHidden } from '@/shared/ui';

interface WorkIndexProps {
  projects: Project[];
}

/**
 * 첫 화면(Stage 히어로)
 * - 왼쪽 1~5열: 제목, 한 문장, 액션, 그 아래 프로젝트 목록
 * - 오른쪽 6~12열: 지금 가리킨 프로젝트의 화면 캡처를 원본 색 그대로 크게
 * 행에 마우스를 올리거나 키보드로 포커스하면 오른쪽 캡처가 바뀐다.
 * 스크립트 없이도 첫 프로젝트의 캡처가 보이고, 모든 행은 상세 페이지 링크로 동작한다.
 */
export function WorkIndex({ projects }: WorkIndexProps) {
  const [active, setActive] = useState(0);
  const hasProjects = projects.length > 0;

  return (
    <Hero id={SECTION_ID.work} aria-labelledby="work-title">
      <Container>
        <Stage>
          <Head>
            <h1 id="work-title" className="settle">
              기술 트랜드에 반응하는 웹을 만듭니다
            </h1>
            <Lead className="settle-rise" style={{ '--i': 1 } as CSSProperties}>
              프론트엔드 개발자 {SITE.owner}({SITE.handle})의 프로젝트 기록입니다.
            </Lead>
            <ButtonRow className="settle-rise" style={{ '--i': 2 } as CSSProperties}>
              <ButtonLink href={`#${SECTION_ID.contact}`} $variant="primary">
                연락하기
              </ButtonLink>
              <ButtonLink href={SITE.links.resume} target="_blank" rel="noreferrer">
                이력서 보기
              </ButtonLink>
            </ButtonRow>
          </Head>

          <Preview aria-hidden="true">
            {hasProjects ? (
              projects.map((project, i) => (
                <PreviewLayer key={project.id} data-active={i === active ? 'true' : undefined}>
                  <Capture src={project.projectBanner} alt="" priority={i === 0} />
                  <PreviewCaption>
                    <strong>{project.title}</strong>
                    {project.useTech.length > 0 && <span>{project.useTech.slice(0, 4).join(', ')}</span>}
                  </PreviewCaption>
                </PreviewLayer>
              ))
            ) : (
              <PreviewLayer data-active="true">
                <Capture src="" alt="" />
              </PreviewLayer>
            )}
          </Preview>

          <Index>
            <VisuallyHidden as="h2">프로젝트 목록</VisuallyHidden>
            {hasProjects ? (
              <List>
                {projects.map((project, i) => (
                  <li key={project.id}>
                    <Row
                      href={`/Project/${project.id}`}
                      aria-current={i === active ? 'true' : undefined}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                    >
                      <RowTitle>
                        <h3>{project.title}</h3>
                        <span>{project.subTitle}</span>
                      </RowTitle>
                      <RowMeta>
                        <span>{project.type === 'solo' ? '개인 프로젝트' : '회사 프로젝트'}</span>
                        <time>{project.date}</time>
                      </RowMeta>
                    </Row>
                  </li>
                ))}
              </List>
            ) : (
              <EmptyNote>공개된 프로젝트가 아직 없습니다.</EmptyNote>
            )}
          </Index>
        </Stage>
      </Container>
    </Hero>
  );
}

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  padding-block: var(--space-xl) var(--space-2xl);

  /* 8x16 셀 점 격자: Cobalt의 ASCII 필드 대신 쓰는 바탕. 아래로 갈수록 사라진다. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: radial-gradient(var(--color-paper-3) 1px, transparent 1.2px);
    background-size: var(--cell-w) var(--cell-h);
    mask-image: linear-gradient(to bottom, black 0%, transparent 70%);
    pointer-events: none;
  }

  ${media.md} {
    padding-block-start: var(--space-lg);
  }
`;

const Stage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: auto 1fr;
  column-gap: var(--gap-columns);
  row-gap: var(--space-xl);

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: none;
    row-gap: var(--space-xl);
  }
`;

const Head = styled.div`
  grid-column: 1 / span 5;
  grid-row: 1;
  display: grid;
  gap: var(--space-lg);
  align-content: start;
  padding-block-start: var(--space-lg);

  h1 {
    font-size: var(--text-display-s);
    max-width: none;
  }

  ${media.md} {
    grid-column: 1;
    padding-block-start: 0;
  }
`;

const Preview = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / span 2;
  align-self: center;
  display: grid;

  ${media.md} {
    grid-column: 1;
    grid-row: auto;
    position: static;
  }
`;

const PreviewLayer = styled.figure`
  grid-area: 1 / 1;
  display: grid;
  gap: var(--space-md);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--dur-long) var(--ease-out),
    visibility 0s linear var(--dur-long);

  &[data-active='true'] {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--dur-long) var(--ease-out);
  }
`;

const PreviewCaption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-muted);

  strong {
    font-family: var(--font-display);
    font-weight: var(--title-weight);
    font-size: var(--text-md);
    color: var(--color-ink);
  }

  span {
    text-align: end;
  }
`;

const Index = styled.div`
  grid-column: 1 / span 5;
  grid-row: 2;
  align-self: start;

  ${media.md} {
    grid-column: 1;
    grid-row: auto;
  }
`;

const List = styled.ul`
  border-top: var(--rule-hair) solid var(--color-rule-2);
`;

const Row = styled(Link)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-md);
  align-items: baseline;
  min-height: 60px;
  padding: var(--space-sm) var(--space-md);
  border-bottom: var(--rule-hair) solid var(--color-rule);
  text-decoration: none;
  color: var(--color-muted);
  transition: background-color var(--dur-short) var(--ease-out);

  /* 지금 오른쪽에 보이는 프로젝트: 왼쪽 코발트 2px 표시 */
  &::before {
    content: '';
    position: absolute;
    inset-block: -1px;
    inset-inline-start: 0;
    inline-size: 2px;
    background: var(--color-accent);
    transform: scaleY(0);
    transition: transform var(--dur-short) var(--ease-out);
  }

  h3 {
    color: var(--color-ink-2);
    font-size: var(--text-lg);
    transition: color var(--dur-short) var(--ease-out);
  }

  &:hover,
  &[aria-current='true'] {
    background: var(--color-paper-2);

    h3 {
      color: var(--color-ink);
    }
  }

  &[aria-current='true']::before {
    transform: scaleY(1);
  }

  &:focus-visible {
    outline-offset: -2px;
  }

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-xs);
  }
`;

const RowTitle = styled.div`
  display: grid;
  gap: var(--space-3xs);
  min-width: 0;

  span {
    font-size: var(--text-sm);
  }
`;

const RowMeta = styled.div`
  display: grid;
  justify-items: end;
  gap: var(--space-2xs);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  ${media.sm} {
    justify-items: start;
    grid-auto-flow: column;
    justify-content: start;
    gap: var(--space-md);
  }
`;

const EmptyNote = styled.p`
  padding-block: var(--space-xl);
  border-block: var(--rule-hair) solid var(--color-rule);
  color: var(--color-muted);
`;
