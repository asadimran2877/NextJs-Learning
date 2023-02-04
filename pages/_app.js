import '@/styles/globals.css';
import { StoreProvider } from '@/utils/Store';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
