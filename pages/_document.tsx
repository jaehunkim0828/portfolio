import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {

    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}


export default Document