import type { AppProps } from 'next/app';
import { useDispatch } from 'react-redux';

import '../styles/globals.css';
import { onDark } from '../store/actions/themeMode';
import { wrapper } from '../store';
import ThemeButton from '../components/ThemeButton';
import Nav from '../components/Nav';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  if (typeof window !== 'undefined' && window.localStorage.getItem('mode') === 'dark') dispatch(onDark());

  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ThemeButton />
    </>
  )
}

export default wrapper.withRedux(MyApp);
