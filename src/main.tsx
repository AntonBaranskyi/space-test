import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './routes/Root.tsx';

import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.tsx';

import './styles/style.scss';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
