'use client';

import styled, { css } from 'styled-components';

/** 페이지 공통 컨테이너: 최대 폭 고정, 넓은 화면에서는 좌우 여백만 커진다. */
export const Container = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
`;

type Gap = 's' | 'm' | 'l';
const gapVar: Record<Gap, string> = {
  s: 'var(--section-gap-s)',
  m: 'var(--section-gap)',
  l: 'var(--section-gap-l)',
};

/**
 * 섹션 바깥 요소: 배경과 상하 여백만 가진다. 폭은 안쪽 Container가 맡는다.
 * $band 이면 한 단계 밝은 바탕(paper-2)으로 구획을 바꾼다.
 */
export const Section = styled.section<{ $top?: Gap; $bottom?: Gap; $band?: boolean }>`
  padding-block-start: ${({ $top = 'm' }) => gapVar[$top]};
  padding-block-end: ${({ $bottom = 'm' }) => gapVar[$bottom]};
  ${({ $band }) =>
    $band &&
    css`
      background: var(--color-paper-2);
      border-block: var(--rule-hair) solid var(--color-rule);
      padding-block: var(--section-gap-s);
    `}
`;

/** 섹션 머리: 제목(h2) + 한 줄 설명. 제목은 1~6열, 설명은 7~12열에 기준선을 맞춘다. */
export const SectionHead = styled.header`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-md);
  align-items: end;
  margin-block-end: var(--space-2xl);

  & > h2 {
    grid-column: 1 / span 6;
  }

  & > p {
    grid-column: 8 / -1;
    color: var(--color-muted);
    font-size: var(--text-lead);
    line-height: 1.5;
    max-width: 44ch;
  }

  @media (max-width: 60rem) {
    & > h2,
    & > p {
      grid-column: 1 / -1;
    }
  }
`;

export const Lead = styled.p`
  font-size: var(--text-lead);
  line-height: 1.5;
  color: var(--color-ink-2);
  max-width: 44ch;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;
