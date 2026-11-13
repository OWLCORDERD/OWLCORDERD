'use client';

import styled from 'styled-components';

interface CaptureProps {
  src: string;
  alt: string;
  /** CSS aspect-ratio 값. 기본 16 / 10 (브라우저 캡처 비율) */
  ratio?: string;
  /** 첫 화면 이미지는 eager 로딩 */
  priority?: boolean;
  className?: string;
}

/**
 * 프로젝트 화면 캡처 프레임(Cobalt): 원본 색 그대로, 1px 헤어라인과 두 모서리를 깎은 패널.
 * src가 비어 있으면 빈 프레임 대신 "캡처 없음" 안내를 보여준다.
 */
export function Capture({ src, alt, ratio = '16 / 10', priority = false, className }: CaptureProps) {
  return (
    <Frame $ratio={ratio} className={className} data-empty={src ? undefined : 'true'}>
      {src ? (
        // 원격(Firebase Storage)·로컬 경로가 섞여 있어 next/image 대신 img 를 쓴다.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      ) : (
        <Empty>화면 캡처가 아직 등록되지 않았습니다.</Empty>
      )}
    </Frame>
  );
}

const Frame = styled.figure<{ $ratio: string }>`
  position: relative;
  overflow: hidden;
  aspect-ratio: ${({ $ratio }) => $ratio};
  background: var(--color-paper-2);
  border: var(--rule-hair) solid var(--color-rule-2);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-frame);

  @supports (corner-shape: bevel) {
    border-radius: var(--cut-l) 4px var(--cut-l) 4px;
    corner-shape: bevel round bevel round;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  &[data-empty] {
    box-shadow: none;
    border-style: dashed;
  }
`;

const Empty = styled.figcaption`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: var(--space-lg);
  color: var(--color-muted);
  font-size: var(--text-sm);
  text-align: center;
`;
