import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { wrapper } from '../store';
import ThemeButton from '../components/ThemeButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ThemeButton />
    </>
  )
}

export default wrapper.withRedux(MyApp);
