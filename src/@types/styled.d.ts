import 'styled-components';

declare module 'styled-components' {
  interface Colors {
    'yellow-100': string;
    'yellow-800': string;
    'purple-100': string;
    'purple-500': string;
    'purple-800': string;
    title: string;
    subtitle: string;
  }

  interface Fonts {
    roboto: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
}
