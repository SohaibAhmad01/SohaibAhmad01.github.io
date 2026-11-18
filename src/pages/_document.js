import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import profile from "../../data/profile.json";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="canonical" href={profile.websiteUrl} />
          <meta name="author" content={profile.name} />
          <meta name="description" content={profile.siteDescription} />
          <meta name="robots" content="index, follow" />
          <meta name="color-scheme" content="light dark" />
          <meta name="theme-color" content="#17181F" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={profile.name} />
          <meta property="og:title" content={`${profile.name} | ${profile.role}`} />
          <meta property="og:description" content={profile.siteDescription} />
          <meta property="og:url" content={profile.websiteUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={`${profile.name} | ${profile.role}`} />
          <meta name="twitter:description" content={profile.siteDescription} />
          <title>{`${profile.name} | ${profile.role}`}</title>
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
