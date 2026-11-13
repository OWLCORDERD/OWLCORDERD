import type { MetadataRoute } from 'next';
import { SITE } from '@/shared/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.ownerEn} Developer site`,
    short_name: SITE.handle,
    start_url: '/',
    display: 'standalone',
    // _tokens.scss 의 --color-paper(oklch 98.6% 0.005 250)를 sRGB로 근사한 값 (manifest는 oklch를 받지 않음)
    theme_color: '#f8fafc',
    background_color: '#f8fafc',
    icons: [{ src: '/owl_icon_125567.ico', sizes: '64x64 32x32 24x24 16x16', type: 'image/x-icon' }],
  };
}
