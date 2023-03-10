import '@/styles/globals.css';
import { StoreProvider } from '@/utils/Store';
import { SessionProvider, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <SessionProvider session={session}>
        <StoreProvider>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </StoreProvider>
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
}
export default App;
