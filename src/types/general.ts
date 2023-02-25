import { CSSProperties } from 'react';

export enum ThemeOptions {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ComponentAttrs {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  id?: string;
}

export type Size = 'sm' | 'md' | 'lg';
