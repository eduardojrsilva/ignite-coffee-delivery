import 'styled-components';

declare module 'styled-components' {
  interface Colors {
    'yellow-100': string;
    'yellow-500': string;
    'yellow-800': string;
    'purple-100': string;
    'purple-500': string;
    'purple-800': string;
    'gray-100': string;
    'gray-150': string;
    'gray-200': string;
    'gray-250': string;
    'gray-300': string;
    'gray-500': string;
    title: string;
    subtitle: string;
    white: string;
  }

  interface Fonts {
    roboto: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
}
