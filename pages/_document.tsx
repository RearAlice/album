import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Cian Meeting 1st Anniversary"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Cian Meeting 1st Anniversary"
          />
          <meta property="og:title" content="Cian Meeting 1st Anniversary Album" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cian Meeting 1st Anniversary Album" />
          <meta
            name="twitter:description"
            content="Cian Meeting 1st Anniversary"
          />
          <meta name="twitter:site" content="@cianmeetings" />
          <meta name="twitter:creator" content="@cianmeetings" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
