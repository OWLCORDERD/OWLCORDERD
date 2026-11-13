'use client';

import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary';

/**
 * Cobalt 키캡: 밝은 키 면에 3px 아래 모서리. hover 시 1px 떠오르고 누르면 가라앉는다.
 * primary(코발트 키)는 화면 단위에 하나만 쓴다. 나머지는 secondary.
 * 8가지 상태: 기본 / hover / focus-visible / active / disabled / aria-busy(진행 중) / visited(링크, 기본과 동일) / aria-current
 */
const base = css<{ $variant?: Variant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  min-height: 48px;
  padding: var(--space-sm) var(--space-lg);
  border: var(--rule-hair) solid var(--color-rule-2);
  border-radius: var(--radius-input);
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: var(--title-weight);
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  transition:
    transform var(--dur-micro) var(--ease-out),
    box-shadow var(--dur-micro) var(--ease-out),
    background-color var(--dur-short) var(--ease-out);

  &:hover:not(:disabled):not([aria-disabled='true']) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: var(--shadow-key-press);
  }

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }

  &[aria-busy='true'] {
    cursor: progress;
  }

  ${({ $variant = 'secondary' }) =>
    $variant === 'primary'
      ? css`
          background: var(--color-accent);
          border-color: var(--color-accent-edge);
          color: var(--color-accent-ink);
          box-shadow: var(--shadow-key-accent);

          &:hover:not(:disabled) {
            background: var(--color-accent-deep);
          }
        `
      : css`
          background: var(--color-key-face);
          color: var(--color-ink);
          box-shadow: var(--shadow-key);
        `}
`;

export const Button = styled.button<{ $variant?: Variant }>`
  ${base}
`;

export const ButtonLink = styled.a<{ $variant?: Variant }>`
  ${base}
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

/** 본문 속 텍스트 링크: hover 시 코발트 밑줄 */
export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-ink);
  text-decoration-line: underline;
  text-decoration-color: var(--color-rule-2);
  transition: text-decoration-color var(--dur-short) var(--ease-out);

  &:hover {
    text-decoration-color: var(--color-accent);
  }
`;
