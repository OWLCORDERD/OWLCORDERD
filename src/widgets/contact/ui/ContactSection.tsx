'use client';

import styled from 'styled-components';
import { ContactForm } from '@/features/send-contact-mail';
import { SECTION_ID, SITE } from '@/shared/config';
import { media } from '@/shared/styles/media';
import { Container, Section, TextLink } from '@/shared/ui';

/** 연락: 왼쪽에 소개 문장과 직접 연락처, 오른쪽에 메일 폼 */
export function ContactSection() {
  return (
    <Section id={SECTION_ID.contact} aria-labelledby="contact-title" $top="l">
      <Container>
        <Layout>
          <Intro>
            <h2 id="contact-title">함께할 프로젝트를 알려주세요</h2>
            <p>
              새로운 분야의 도전과 협업으로 성장하는 것을 즐깁니다. 여러 B2B, B2C 플랫폼 개발에 참여하며 사용자 경험과
              인터랙션을 깊이 고민해 왔습니다.
            </p>
            <p>궁금한 점이나 함께하고 싶은 프로젝트가 있다면 메시지를 남겨주세요. 3일 안에 회신드리겠습니다.</p>

            <Direct>
              <div>
                <dt>메일</dt>
                <dd>
                  <TextLink href={`mailto:${SITE.email}`}>{SITE.email}</TextLink>
                </dd>
              </div>
              <div>
                <dt>전화</dt>
                <dd>
                  <TextLink href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</TextLink>
                </dd>
              </div>
            </Direct>
          </Intro>

          <FormWell>
            <ContactForm />
          </FormWell>
        </Layout>
      </Container>
    </Section>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: var(--space-3xl);
  align-items: start;

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-2xl);
  }
`;

const Intro = styled.div`
  display: grid;
  gap: var(--space-lg);

  h2 {
    max-width: 14ch;
    margin-block-end: var(--space-xs);
  }

  p {
    color: var(--color-ink-2);
    max-width: 46ch;
  }
`;

const Direct = styled.dl`
  display: grid;
  gap: var(--space-md);
  margin-block-start: var(--space-lg);
  padding-block-start: var(--space-lg);
  border-top: var(--rule-hair) solid var(--color-rule);

  div {
    display: grid;
    grid-template-columns: 4rem minmax(0, 1fr);
    gap: var(--space-md);
  }

  dt {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-muted);
  }

  dd {
    font-variant-numeric: tabular-nums;
    overflow-wrap: anywhere;
  }
`;

const FormWell = styled.div`
  padding: var(--space-xl);
  background: var(--color-paper-2);

  ${media.sm} {
    padding: var(--space-lg);
  }
`;
