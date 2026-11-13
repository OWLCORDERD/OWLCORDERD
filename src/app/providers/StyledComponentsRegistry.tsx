'use client';

import { useState, type ReactNode } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * styled-components SSR 레지스트리.
 * 서버 렌더링 중 수집한 스타일을 HTML 스트림의 <head>에 끼워 넣어
 * 첫 응답부터 스타일이 적용된 마크업이 내려가도록 한다(FOUC 방지, SEO 크롤러 대응).
 */
export function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
}
