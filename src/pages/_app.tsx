import { ApolloProvider } from '@apollo/client';
import { client } from '../configs';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import { AppLayout, PageLoader } from '@/components';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState<boolean>(false);

  // hack to force router event to fire only when window is available
  typeof window !== 'undefined' &&
    Router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
  typeof window !== 'undefined' &&
    Router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });

  let persistor = persistStore(store);

  return (
    <>
      <Head>
        <title>Rick and Morty™</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {/* display page loader based on loading  variable*/}
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
    </>
  );
}

export default MyApp;
