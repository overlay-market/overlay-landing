import React, { useMemo } from "react";
import { Text, TextProps as TextPropsOriginal } from 'rebass';
import styled, { 
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider
} from 'styled-components';
import { Colors } from "./styled";

// remove screenSize once 
// updated for theme provider
const screenSize = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1400px'
};

export const device = {
  sm: `(min-width: ${screenSize.sm})`,
  md: `(min-width: ${screenSize.md})`,
  lg: `(min-width: ${screenSize.lg})`,
  xl: `(min-width: ${screenSize.xl})`
}

// updated
export const MEDIA_WIDTHS = {
  minExtraSmall: 576,
  minSmall: 768,
  minMedium: 992,
  minLarge: 1400
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (min-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any;

export function colors(darkMode: boolean): Colors {
  return {
    // background
    background: '#0B0F1C',

    // blues
    ovl_blue_lgt: '#56CCF2',
    ovl_blue: '#12B4FF',
    ovl_blue_drk: '#2D9CDB',

    // greens
    green_lgt: '#10DCB1',
    green: '#27AE60',
    green_drk: '#219653',

    // red
    red: '#DC1F4E',

    // yellow
    yellow: '#F2C94C'
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    mediaWidth: mediaWidthTemplates,
  }
};

export default function ThemeProvider({ children } : { children: React.ReactNode }) {
  const darkMode = useIsDarkMode();

  const themeObject = useMemo(() => theme(darkMode), [darkMode]);

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
};

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

type TextProps = Omit<TextPropsOriginal, 'css'>

export const TEXT = {
  Main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  Link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  Body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  LargeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  MediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  SubHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  Small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
}