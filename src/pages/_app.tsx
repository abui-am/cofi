import '../styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { DefaultSeo } from 'next-seo';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        title="My Awesome Project"
        description="My latest awesome project"
        canonical="https://www.canonical.ie/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'My Website',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
