import React from 'react';
import ReactDOM from 'react-dom/client';

import AuthProvider from './provider/authProvider';
import Routes from './router';

import { GlobalStyle } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
