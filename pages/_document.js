import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* EB Garamond */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&display=swap"
          rel="stylesheet"
        />
        
        {/* Dancing Script */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
