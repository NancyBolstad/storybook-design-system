import {
  Theme,
  IColors,
  Font,
  IFontFamily,
  IFontWeight,
  IFonts,
  IMediaQueries,
  ISpacing,
} from '../types/theme';

const defaultColors: IColors = {
  primary: '#1C43B3',
  primaryVariant: '#4263c7',
  secondary: '#e07213',
  backgroundBlue: '#d9f2ff',
  backgroundGrey: '#ebebea',
  white: '#ffffff',
  black: '#494948',
};

export const defaultMediaQueries: IMediaQueries = {
  small: 600,
  medium: 768,
  large: 1280,
};

const defaultSpacing: ISpacing = {
  xs: 0.5,
  s: 1,
  m: 1.5,
  l: 3,
  xl: 5,
};

const defaultFontFamily: IFontFamily = {
  primary: "'Muli', sans-serif",
  secondary: "'Muli', sans-serif",
};

const defaultFontWeight: IFontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const h1: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.875,
  lineHeight: 1.25,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 3.125,
      lineHeight: 1.15,
    },
  ],
};

const h2: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.5625,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 2.1875,
      lineHeight: 1.15,
    },
  ],
};

const h3: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.25,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.5625,
      lineHeight: 1.15,
    },
  ],
};

const h4: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

const h5: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.regular,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.regular,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

const h6: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1,
      lineHeight: 1.15,
    },
  ],
};

const b1: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.regular,
  size: 1,
  lineHeight: 1.5,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.regular,
      size: 1,
      lineHeight: 1.5,
    },
  ],
};

const b2: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.125,
      lineHeight: 1.15,
    },
  ],
};

const b3: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

export const defaultFonts: IFonts = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b1,
  b2,
  b3,
};

export const defaultTheme: Theme = {
  spacing: defaultSpacing,
  fonts: defaultFonts,
  mediaQueries: defaultMediaQueries,
  colors: defaultColors,
};

export default defaultTheme;
