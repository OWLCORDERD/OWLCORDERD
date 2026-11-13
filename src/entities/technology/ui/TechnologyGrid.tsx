'use client';

import styled from 'styled-components';
import { media } from '@/shared/styles/media';
import type { Technology } from '../model/types';

/** 기술 항목 그리드: 로고, 이름, 한 줄 설명. 열 수는 항목 수에 맞춰 마지막 줄이 비지 않도록 4·3열을 고른다. */
export function TechnologyGrid({ items }: { items: Technology[] }) {
  if (items.length === 0) {
    return <Empty>등록된 기술이 아직 없습니다.</Empty>;
  }

  const columns = items.length % 4 === 0 || items.length > 8 ? 4 : 3;

  return (
    <Grid $columns={columns}>
      {items.map(item => (
        <Item key={item.id}>
          {item.svgIcon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.svgIcon} alt="" width={40} height={40} loading="lazy" />
          )}
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </Item>
      ))}
    </Grid>
  );
}

const Grid = styled.ul<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  border-top: var(--rule-hair) solid var(--color-rule);

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Item = styled.li`
  display: grid;
  align-content: start;
  gap: var(--space-sm);
  padding: var(--space-xl) var(--space-lg) var(--space-xl) 0;
  border-bottom: var(--rule-hair) solid var(--color-rule);

  /* 아이콘 SVG가 어두운 바탕 기준(흰색 위주)이라 graphite 키 위에 올린다. */
  img {
    box-sizing: content-box;
    width: 32px;
    height: 32px;
    padding: var(--space-xs);
    object-fit: contain;
    margin-block-end: var(--space-xs);
    background: var(--color-graphite);
    border-radius: var(--radius-input);
  }

  p {
    color: var(--color-muted);
    max-width: 36ch;
  }
`;

const Empty = styled.p`
  color: var(--color-muted);
`;
