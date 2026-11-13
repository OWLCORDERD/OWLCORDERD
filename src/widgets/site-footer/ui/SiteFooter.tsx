'use client';

import styled from 'styled-components';
import { SITE } from '@/shared/config';
import { Container, TextLink } from '@/shared/ui';

/** 콜로폰 블록 푸터: 워드마크와 한 문단의 크레딧, 실제 외부 링크. */
export function SiteFooter() {
  return (
    <Foot>
      <Container>
        <Grid>
          <Mark>{SITE.handle}</Mark>
          <Colophon>
            프론트엔드 개발자 {SITE.owner}({SITE.ownerEn})의 작업과 기록을 모았습니다. 협업 제안은 메일로 보내 주세요.
          </Colophon>
          <Links aria-label="외부 링크">
            <li>
              <TextLink href={SITE.links.github} target="_blank" rel="noreferrer">
                GitHub
              </TextLink>
            </li>
            <li>
              <TextLink href={SITE.links.resume} target="_blank" rel="noreferrer">
                이력서(Notion)
              </TextLink>
            </li>
            <li>
              <TextLink href={`mailto:${SITE.email}`}>{SITE.email}</TextLink>
            </li>
          </Links>
          <Legal>
            <small>© {SITE.since}. Owlcoderd All rights reserved.</small>
          </Legal>
        </Grid>
      </Container>
    </Foot>
  );
}

const Foot = styled.footer`
  border-top: var(--rule-hair) solid var(--color-rule);
  padding-block: var(--space-3xl) var(--space-xl);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--gap-columns);
  row-gap: var(--space-xl);

  @media (max-width: 60rem) {
    & > * {
      grid-column: 1 / -1 !important;
    }
  }
`;

const Mark = styled.p`
  grid-column: 1 / span 4;
  font-size: var(--text-display-s);
  font-weight: var(--display-weight);
  letter-spacing: var(--tracking-display);
  line-height: 1;
`;

const Colophon = styled.p`
  grid-column: 6 / span 4;
  color: var(--color-muted);
  max-width: 40ch;
`;

const Links = styled.ul`
  grid-column: 10 / -1;
  display: grid;
  align-content: start;

  /* 터치 대상 44px 확보 */
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }
`;

const Legal = styled.div`
  grid-column: 1 / -1;
  padding-block-start: var(--space-lg);
  border-top: var(--rule-hair) solid var(--color-rule);
  color: var(--color-muted);

  small {
    font-size: var(--text-sm);
  }
`;
