'use client';

import type { ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
}
