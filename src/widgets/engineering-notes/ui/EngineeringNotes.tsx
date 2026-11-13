'use client';

import styled from 'styled-components';
import type { EngineeringNote } from '@/entities/engineering-note';
import { media } from '@/shared/styles/media';
import { ButtonLink, Container, Section, SectionHead, VisuallyHidden } from '@/shared/ui';

interface EngineeringNotesProps {
  notes: EngineeringNote[];
}

/** 주요 기여 이력(Rows): 제목·설명·사용 기술, 오른쪽에 기술 문서 다운로드 */
export function EngineeringNotes({ notes }: EngineeringNotesProps) {
  return (
    <Section aria-labelledby="notes-title" $top="s" $bottom="l">
      <Container>
        <SectionHead>
          <h2 id="notes-title">주요 기여 이력</h2>
          <p>
            총 <span className="num">{notes.length}</span>건
          </p>
        </SectionHead>

        {notes.length === 0 ? (
          <Empty>이 프로젝트에 정리된 기여 이력이 아직 없습니다.</Empty>
        ) : (
          <Rows>
            {notes.map(note => (
              <li key={note.id}>
                <div>
                  <h3>{note.title}</h3>
                  {note.technology.length > 0 && <Tech>{note.technology.join(', ')}</Tech>}
                </div>
                <p>{note.info}</p>
                <Action>
                  {note.downloadUrl ? (
                    <ButtonLink href={note.downloadUrl} target="_blank" rel="noreferrer" download>
                      기술 문서 내려받기
                      <VisuallyHidden>: {note.title}</VisuallyHidden>
                    </ButtonLink>
                  ) : (
                    <Pending>문서 준비 중</Pending>
                  )}
                </Action>
              </li>
            ))}
          </Rows>
        )}
      </Container>
    </Section>
  );
}

const Rows = styled.ul`
  border-top: var(--rule-hair) solid var(--color-rule);

  li {
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 5fr) minmax(0, 3fr);
    gap: var(--gap-columns);
    align-items: start;
    padding-block: var(--space-xl);
    border-bottom: var(--rule-hair) solid var(--color-rule);
  }

  p {
    color: var(--color-ink-2);
  }

  ${media.md} {
    li {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--space-md);
    }
  }
`;

const Tech = styled.p`
  margin-block-start: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--color-muted) !important;
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;

  ${media.md} {
    justify-content: flex-start;
  }
`;

const Pending = styled.span`
  font-size: var(--text-sm);
  color: var(--color-muted);
`;

const Empty = styled.p`
  padding-block: var(--space-xl);
  border-block: var(--rule-hair) solid var(--color-rule);
  color: var(--color-muted);
`;
