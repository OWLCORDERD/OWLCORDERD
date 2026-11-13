'use client';

import styled from 'styled-components';
import type { Strength } from '@/entities/strength';
import { SECTION_ID, SITE } from '@/shared/config';
import { media } from '@/shared/styles/media';
import { ButtonLink, Container, Section } from '@/shared/ui';

interface AboutDeveloperProps {
  strengths: Strength[];
}

/** 소개: 한 문장 선언(Statement) 아래 본문과 역량 목록(Rows)을 나란히 둔다. */
export function AboutDeveloper({ strengths }: AboutDeveloperProps) {
  return (
    <Section id={SECTION_ID.about} aria-labelledby="about-title" $band>
      <Container>
        <Statement id="about-title">
          트렌드를 탐구하고 주도적인 경험으로 인터랙션을 설계하는 프론트엔드 개발자입니다.
        </Statement>

        <Columns>
          <Story>
            <p>
              정적인 화면을 넘어 사용자의 움직임과 흐름에 즉각적으로 반응하는 인터랙티브 웹 경험을 만드는 것에 관심이
              있으며, 새로운 기술 트렌드와 아키텍처를 적극 탐구하여 경험치를 쌓아가고 있습니다.
            </p>
            <p>
              벡터 그래픽, 모션, 데이터 시각화 기술을 활용해 정보를 전달하는 데서 그치지 않고 시선이 머무르는 경험을
              구현합니다.
            </p>
            <p>
              AI를 자동화 도구로만 쓰지 않고 문제 해결 파트너로 활용해 함께 검증하며, 실무에 효율적으로 적용해 더 나은
              구조로 이끌기 위해 노력합니다.
            </p>
            <div>
              <ButtonLink href={SITE.links.resume} target="_blank" rel="noreferrer">
                이력서 보기
              </ButtonLink>
            </div>
          </Story>

          {strengths.length > 0 && (
            <Rows aria-label="개발 역량">
              {strengths.map(item => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </li>
              ))}
            </Rows>
          )}
        </Columns>
      </Container>
    </Section>
  );
}

const Statement = styled.h2`
  max-width: 22ch;
  font-size: var(--text-display-s);
  margin-block-end: var(--space-3xl);

  ${media.md} {
    margin-block-end: var(--space-2xl);
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: var(--space-3xl);
  align-items: start;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-2xl);
  }
`;

const Story = styled.div`
  display: grid;
  gap: var(--space-lg);
  color: var(--color-ink-2);

  p {
    max-width: 52ch;
  }

  div {
    padding-block-start: var(--space-xs);
  }
`;

const Rows = styled.ul`
  border-top: var(--rule-hair) solid var(--color-rule-2);

  li {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    gap: var(--space-lg);
    padding-block: var(--space-lg);
    border-bottom: var(--rule-hair) solid var(--color-rule-2);
  }

  h3 {
    font-size: var(--text-lg);
  }

  p {
    color: var(--color-muted);
  }

  ${media.sm} {
    li {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--space-xs);
    }
  }
`;
