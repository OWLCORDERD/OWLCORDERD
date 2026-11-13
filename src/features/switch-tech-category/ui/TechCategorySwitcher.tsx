'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import styled from 'styled-components';
import { TECHNOLOGY_CATEGORIES, type TechnologyCategory } from '@/entities/technology';

interface TechCategorySwitcherProps {
  /** 카테고리별 패널 내용. 서버에서 모두 렌더링되고, 선택되지 않은 패널은 hidden 처리된다. */
  panels: Record<TechnologyCategory, ReactNode>;
  label: string;
}

/**
 * Develop / Design 전환 세그먼트 컨트롤 (WAI-ARIA tabs 패턴).
 * - 좌우 화살표·Home·End 로 탭 이동
 * - 스크립트가 없어도 첫 패널은 보인다.
 */
export function TechCategorySwitcher({ panels, label }: TechCategorySwitcherProps) {
  const [current, setCurrent] = useState<TechnologyCategory>(TECHNOLOGY_CATEGORIES[0].value);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = TECHNOLOGY_CATEGORIES.length - 1;
    const next =
      event.key === 'ArrowRight'
        ? (index + 1) % (last + 1)
        : event.key === 'ArrowLeft'
          ? (index - 1 + last + 1) % (last + 1)
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setCurrent(TECHNOLOGY_CATEGORIES[next].value);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <Tabs role="tablist" aria-label={label}>
        {TECHNOLOGY_CATEGORIES.map((category, index) => {
          const selected = category.value === current;
          return (
            <Tab
              key={category.value}
              ref={el => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${category.value}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${category.value}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setCurrent(category.value)}
              onKeyDown={event => onKeyDown(event, index)}
            >
              {category.label}
            </Tab>
          );
        })}
      </Tabs>

      {TECHNOLOGY_CATEGORIES.map(category => (
        <div
          key={category.value}
          role="tabpanel"
          id={`${baseId}-panel-${category.value}`}
          aria-labelledby={`${baseId}-tab-${category.value}`}
          hidden={category.value !== current}
        >
          {panels[category.value]}
        </div>
      ))}
    </div>
  );
}

const Tabs = styled.div`
  display: inline-flex;
  margin-block-end: var(--space-2xl);
  border: var(--rule-hair) solid var(--color-rule-2);
`;

const Tab = styled.button`
  min-height: 44px;
  padding-inline: var(--space-lg);
  border: 0;
  background: transparent;
  color: var(--color-muted);
  font-weight: 500;
  transition:
    background-color var(--dur-short) var(--ease-out),
    color var(--dur-short) var(--ease-out);

  &:hover {
    color: var(--color-ink);
  }

  &[aria-selected='true'] {
    background: var(--color-ink);
    color: var(--color-paper);
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
