import { ThemedCssFunction } from 'styled-components';

export type Color = string;

export interface Colors {
  // background
  background: Color

  // blues
  ovl_blue_lgt: Color
  ovl_blue: Color
  ovl_blue_drk: Color

  // greens
  green_lgt: Color
  green: Color
  green_drk: Color

  // red
  red: Color

  // yellow
  yellow: Color
};

declare module 'styled-components' {

  export interface DefaultTheme extends Colors { 
    // media queries
    mediaWidth: {
      sm: ThemedCssFunction<DefaultTheme>
      md: ThemedCssFunction<DefaultTheme>
      lg: ThemedCssFunction<DefaultTheme>
      xl: ThemedCssFunction<DefaultTheme>
    }
  };
};
