'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Keyboard, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { media } from '@/shared/styles/media';
import { Capture, Container, Section, SectionHead } from '@/shared/ui';

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

const SLIDE_SPEED = 480;

/**
 * 화면 미리보기 슬라이더(Swiper)
 * - 메인: 한 장씩 크게 넘긴다. 드래그·스와이프, 키보드 방향키(슬라이더가 화면에 보일 때), 이전/다음 키캡.
 * - 썸네일 줄: 전체 화면 수를 한눈에 보여 주고, 누르면 그 화면으로 이동한다(Thumbs 모듈).
 * - 동작 줄이기 설정이면 넘김 애니메이션 없이 바로 바뀐다.
 * Swiper 코어 레이아웃 CSS(swiper/css)만 가져오고, 나머지 모양은 styled-components 로 그린다.
 */
export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [main, setMain] = useState<SwiperInstance | null>(null);
  const [thumbs, setThumbs] = useState<SwiperInstance | null>(null);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(SLIDE_SPEED);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setSpeed(query.matches ? 0 : SLIDE_SPEED);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  if (images.length === 0) return null;

  const total = images.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <Section aria-labelledby="gallery-title" $top="s">
      <Container>
        <SectionHead>
          <h2 id="gallery-title">화면 미리보기</h2>
          <p>{total}개 화면을 넘겨 보거나 아래 목록에서 골라 볼 수 있습니다.</p>
        </SectionHead>

        <Slider>
          <Swiper
            modules={[A11y, Keyboard, Thumbs]}
            onSwiper={setMain}
            onSlideChange={swiper => setIndex(swiper.activeIndex)}
            thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{
              containerMessage: `${title} 화면 미리보기`,
              slideLabelMessage: '{{index}} / {{slidesLength}}',
              prevSlideMessage: '이전 화면',
              nextSlideMessage: '다음 화면',
            }}
            speed={speed}
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{ 960: { slidesPerView: 1.25, spaceBetween: 32 } }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={src}>
                <Capture src={src} alt={`${title} 화면 ${i + 1}`} ratio="16 / 10" priority={i < 2} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Controls>
            <Counter aria-live="polite">
              <strong>{index + 1}</strong> / {total}
            </Counter>
            <Keys>
              <Key type="button" onClick={() => main?.slidePrev()} disabled={isFirst} aria-label="이전 화면">
                <Chevron $dir="prev" />
              </Key>
              <Key type="button" onClick={() => main?.slideNext()} disabled={isLast} aria-label="다음 화면">
                <Chevron $dir="next" />
              </Key>
            </Keys>
          </Controls>

          {total > 1 && (
            <ThumbRail>
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbs}
                watchSlidesProgress
                slidesPerView="auto"
                spaceBetween={12}
                speed={speed}
              >
                {images.map((src, i) => (
                  <SwiperSlide key={src}>
                    <ThumbButton
                      type="button"
                      onClick={() => main?.slideTo(i)}
                      aria-label={`${i + 1}번째 화면 보기`}
                      aria-current={i === index ? 'true' : undefined}
                    >
                      <Capture src={src} alt="" ratio="16 / 10" />
                    </ThumbButton>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ThumbRail>
          )}
        </Slider>
      </Container>
    </Section>
  );
}

const Slider = styled.div`
  /* Swiper는 부모 폭을 재서 슬라이드 폭을 정한다. 그리드/플렉스 자식이면 폭이 슬라이드에 맞춰
     다시 늘어나는 순환이 생기므로 일반 블록 흐름으로 쌓고 간격은 margin으로 준다. */
  display: block;
  min-width: 0;

  & > * + * {
    margin-block-start: var(--space-md);
  }

  /* 슬라이드 안 캡처의 그림자가 잘리지 않도록 여유를 준다 */
  .swiper {
    padding-block-end: var(--space-lg);
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding-block-start: var(--space-md);
  border-top: var(--rule-hair) solid var(--color-rule);
`;

const Counter = styled.p`
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  color: var(--color-muted);

  strong {
    font-size: var(--text-title);
    font-weight: var(--display-weight);
    color: var(--color-ink);
  }
`;

const Keys = styled.div`
  display: flex;
  gap: var(--space-sm);
`;

/** 이전/다음 키캡: shared/ui Button 의 secondary 키와 같은 재질, 정사각 48px */
const Key = styled.button`
  display: inline-grid;
  place-items: center;
  inline-size: 48px;
  block-size: 48px;
  padding: 0;
  border: var(--rule-hair) solid var(--color-rule-2);
  border-radius: var(--radius-input);
  background: var(--color-key-face);
  color: var(--color-ink);
  box-shadow: var(--shadow-key);
  transition:
    transform var(--dur-micro) var(--ease-out),
    box-shadow var(--dur-micro) var(--ease-out);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: var(--shadow-key-press);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

/** 꺾쇠: 테두리 두 변을 회전시켜 그린다(아이콘 폰트·SVG 파일 없이 currentColor 사용) */
const Chevron = styled.span<{ $dir: 'prev' | 'next' }>`
  inline-size: 10px;
  block-size: 10px;
  border-block-start: 2px solid currentColor;
  border-inline-end: 2px solid currentColor;
  transform: ${({ $dir }) => ($dir === 'next' ? 'translateX(-2px) rotate(45deg)' : 'translateX(2px) rotate(-135deg)')};
`;

const ThumbRail = styled.div`
  .swiper-slide {
    inline-size: 160px;

    ${media.sm} {
      inline-size: 112px;
    }
  }
`;

const ThumbButton = styled.button`
  display: block;
  inline-size: 100%;
  padding: 0;
  border: 0;
  background: none;
  opacity: 0.55;
  transition: opacity var(--dur-short) var(--ease-out);

  figure {
    box-shadow: none;
    transition: border-color var(--dur-short) var(--ease-out);
  }

  &:hover {
    opacity: 0.85;
  }

  &[aria-current='true'] {
    opacity: 1;

    figure {
      border-color: var(--color-accent);
      outline: 1px solid var(--color-accent);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
  }
`;
