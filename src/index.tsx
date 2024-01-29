import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { LoginPage } from './pages/LoginPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  </React.StrictMode>,
);
