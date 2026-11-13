/** 브레이크포인트. 값은 src/app/styles/_tokens.scss 의 $breakpoints 와 같다. */
export const media = {
  /** 60rem(960px) 이하: 태블릿·모바일 */
  md: '@media (max-width: 60rem)',
  /** 40rem(640px) 이하: 모바일 */
  sm: '@media (max-width: 40rem)',
  /** 마우스처럼 정밀한 포인터 + hover 가능 */
  hover: '@media (hover: hover) and (pointer: fine)',
} as const;
