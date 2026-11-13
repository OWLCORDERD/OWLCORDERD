'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { SECTION_ID, SITE } from '@/shared/config';
import { media } from '@/shared/styles/media';

const NAV_ITEMS = [
  { href: `/#${SECTION_ID.work}`, label: '작업' },
  { href: `/#${SECTION_ID.about}`, label: '소개' },
  { href: `/#${SECTION_ID.stack}`, label: '기술' },
] as const;

/**
 * 화면 폭을 꽉 채우는 상단 바: 왼쪽 워드마크, 오른쪽 섹션 링크와 연락 액션. 아래 1px 헤어라인.
 * 링크가 3개뿐이라 모바일에서도 햄버거 없이 한 줄을 유지한다.
 */
export function SiteHeader() {
  return (
    <Bar>
      <Inner>
        <Wordmark href="/" aria-label={`${SITE.handle} 홈으로`}>
          <Logo aria-hidden="true" />
          <span>{SITE.handle}</span>
        </Wordmark>

        <Nav aria-label="주요 메뉴">
          <ul>
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <Contact href={`/#${SECTION_ID.contact}`}>연락하기</Contact>
        </Nav>
      </Inner>
    </Bar>
  );
}

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: var(--z-sticky-nav);
  background: var(--color-bar);
  backdrop-filter: blur(12px) saturate(1.4);
  border-bottom: var(--rule-hair) solid var(--color-rule);
  padding-inline: var(--gutter);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  max-width: calc(var(--container) - var(--gutter) * 2);
  min-height: var(--nav-height);
  margin-inline: auto;

  ${media.sm} {
    gap: var(--space-sm);
  }
`;

const Wordmark = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: var(--display-weight);
  letter-spacing: -0.01em;

  ${media.sm} {
    span {
      display: none;
    }
  }
`;

/** 흰색 PNG 로고를 마스크로 써서 잉크 색으로 칠한다(밝은 바탕에서도 보이도록). */
const Logo = styled.span`
  flex-shrink: 0;
  inline-size: 28px;
  block-size: 28px;
  background: var(--color-ink);
  mask: url('/Image/logo/logo.png') center / contain no-repeat;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  ul {
    display: flex;
    gap: var(--space-lg);
  }

  ${media.sm} {
    gap: var(--space-md);

    ul {
      gap: var(--space-md);
    }
  }
`;

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-muted);
  text-decoration: none;
  transition: color var(--dur-short) var(--ease-out);

  &:hover {
    color: var(--color-ink);
  }
`;

const Contact = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding-inline: var(--space-md);
  border: var(--rule-hair) solid var(--color-rule-2);
  border-radius: var(--radius-input);
  background: var(--color-key-face);
  color: var(--color-ink);
  box-shadow: var(--shadow-key);
  font-family: var(--font-display);
  font-weight: var(--title-weight);
  text-decoration: none;
  white-space: nowrap;
  transition:
    transform var(--dur-micro) var(--ease-out),
    background-color var(--dur-short) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: var(--shadow-key-press);
  }
`;
