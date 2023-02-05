import '@/styles/globals.css';
import { StoreProvider } from '@/utils/Store';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <SessionProvider session={session}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
