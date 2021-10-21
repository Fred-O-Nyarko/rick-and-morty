import { ApolloProvider } from '@apollo/client';
import { client } from '../configs';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import { AppLayout, PageLoader } from '../components';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState<boolean>(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  let persistor = persistStore(store);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {loading ? (
            <PageLoader />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
