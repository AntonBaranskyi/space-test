import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './routes/Root.tsx';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>
);
