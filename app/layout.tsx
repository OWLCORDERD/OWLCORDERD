import type { Metadata, Viewport } from 'next';
import { Familjen_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { AppProviders } from '@/app';
import { SITE } from '@/shared/config';
import '@/app/styles/index.scss';

// 라틴 글자: Familjen Grotesk(제목) + IBM Plex Sans(본문). 한글은 Pretendard가 받는다.
const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-familjen',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.handle}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.owner, url: SITE.links.github }],
  icons: { icon: '/owl_icon_125567.ico' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE.handle,
    title: `개발자 ${SITE.owner} · Front-end Developer`,
    description: SITE.description,
    images: [{ url: '/Image/프로필 사진.webp', alt: `${SITE.owner} 프로필 사진` }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#f8fafc',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" data-scroll-behavior="smooth" className={`${familjen.variable} ${plex.variable}`}>
      <head>
        {/* Pretendard: 사용하는 글자 범위만 내려받는 dynamic subset (한글 본문용) */}
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
