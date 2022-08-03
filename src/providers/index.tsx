import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { CartProvider } from './Cart';
import { ToastProvider } from './Toast';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
