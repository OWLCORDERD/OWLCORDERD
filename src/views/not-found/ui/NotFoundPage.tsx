'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { SECTION_ID } from '@/shared/config';
import { Container, Lead } from '@/shared/ui';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';

/** 없는 주소 또는 삭제된 프로젝트 */
export function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Wrap>
          <Container>
            <Code aria-hidden="true">404</Code>
            <h1>찾는 페이지가 없습니다</h1>
            <Lead>주소가 바뀌었거나 프로젝트가 내려갔을 수 있습니다. 작업 목록에서 다시 찾아보세요.</Lead>
            <Back href={`/#${SECTION_ID.work}`}>작업 목록으로 가기</Back>
          </Container>
        </Wrap>
      </main>
      <SiteFooter />
    </>
  );
}

const Wrap = styled.section`
  padding-block: var(--section-gap) var(--section-gap-l);

  h1 {
    font-size: var(--text-display-s);
    margin-block-end: var(--space-lg);
  }

  ${Lead} {
    margin-block-end: var(--space-xl);
  }
`;

const Code = styled.p`
  font-size: clamp(6rem, 16vw, 14rem);
  font-weight: var(--display-weight);
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: var(--color-rule-2);
  font-variant-numeric: tabular-nums;
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: var(--space-sm) var(--space-lg);
  border: var(--rule-hair) solid var(--color-rule-2);
  color: var(--color-ink);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background: var(--color-paper-3);
  }
`;
