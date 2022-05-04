import type { AppProps } from 'next/app';
import { useDispatch } from 'react-redux';

import '../styles/globals.css';
import { onDark } from '../store/actions/themeMode';
import { wrapper } from '../store';
import ThemeButton from '../components/ThemeButton';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  if (typeof window !== 'undefined' && window.localStorage.getItem('mode') === 'dark') dispatch(onDark());

  return (
    <div>
      <Head>
          <title>김재훈 개발자 포트폴리오</title>
          <link rel='canonical' href="http://tftstory.com" ></link>
          <meta
              name="description"
              content="안녕하세요. Front-end개발자 김재훈입니다."
          />
          <meta
              name="og:title"
              content="김재훈 개발자 포트폴리오"
          />
          <meta
              name="og:description"
              content="안녕하세요. Front-end개발자 김재훈입니다."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js" defer></script>
        </Head>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ThemeButton />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
