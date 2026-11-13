'use client';

import { createGlobalStyle } from 'styled-components';

/**
 * 리셋과 기본 요소 스타일. 값은 전부 _tokens.scss 의 커스텀 프로퍼티를 참조한다.
 * (Hallmark Floor: overflow-x clip, :focus-visible, 헤딩 줄바꿈 처리 등)
 */
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body { overflow-x: clip; }

  html {
    scrollbar-color: var(--color-muted) var(--color-paper);
    scroll-padding-top: calc(var(--nav-height) + var(--space-xl));
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }

  body {
    margin: 0;
    min-height: 100dvh;
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-body);
    font-size: var(--text-md);
    line-height: 1.6;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    caret-color: var(--color-accent);
    word-break: keep-all;
  }

  ::selection {
    background: color-mix(in oklab, var(--color-accent) 22%, transparent);
    color: var(--color-ink);
  }

  :focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  a {
    color: inherit;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: var(--display-weight);
    letter-spacing: var(--tracking-display);
    line-height: 1.08;
    overflow-wrap: break-word;
    min-width: 0;
    text-wrap: balance;
  }

  h1 { max-width: 20ch; font-size: var(--text-display); }
  h2 { max-width: 30ch; font-size: var(--text-section); }
  h3 {
    max-width: 40ch;
    font-size: var(--text-title);
    font-weight: var(--title-weight);
    letter-spacing: 0;
    line-height: 1.3;
  }

  p { margin: 0; text-wrap: pretty; }
  p:not([class]) { max-width: 65ch; }

  ul, ol, dl, dd, figure { margin: 0; padding: 0; }
  ul, ol { list-style: none; }

  img, video { max-width: 100%; height: auto; display: block; }
  svg { display: block; }
  [hidden] { display: none !important; }

  button, input, select, textarea { font: inherit; color: inherit; }
  button { cursor: pointer; }
`;
