import React, { useMemo } from "react";
import { Text, TextProps as TextPropsOriginal } from 'rebass';
import styled, { 
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider
} from 'styled-components';
import { useIsDarkMode } from "../state/user/hooks";
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
    background: darkMode ? '#0B0F1C' : '#fff',

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
  Header1(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={24} fontFamily={'Press Start 2P'} {...props} />
  },
  Header2(props: TextProps) {
    return <TextWrapper fontWeight={700} fontSize={24} fontFamily={'Roboto'} {...props} />
  },
  Body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} fontFamily={'Roboto'} {...props} />
  },
  BodyBold(props: TextProps) {
    return <TextWrapper fontWeight={700} fontSize={16} fontFamily={'Roboto'} {...props} />
  },
  BodySmall(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} fontFamily={'Roboto'} {...props} />
  },
  BodyXSmall(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} fontFamily={'Roboto'} {...props} />
  },
}