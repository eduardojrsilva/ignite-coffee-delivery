import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    'yellow-100': '#F1E9C9',
    'yellow-500': '#DBAC2C',
    'yellow-800': '#C47F17',

    'purple-100': '#EBE5F9',
    'purple-500': '#8047F8',
    'purple-800': '#4B2995',

    'gray-100': '#F3F2F2',
    'gray-150': '#EEEDED',
    'gray-200': '#E6E5E5',
    'gray-250': '#8D8686',
    'gray-300': '#8D8686',
    'gray-500': '#574F4D',

    title: '#272221',
    subtitle: '#403937',
    white: '#FFFFFF',
  },

  fonts: {
    roboto: 'Roboto, sans-serif',
  },

  gradients: {
    border: 'linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C, #8047F8)',
  },
};
