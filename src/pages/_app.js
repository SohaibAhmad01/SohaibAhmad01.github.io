import {ThemeProvider} from 'styled-components';
import Head from 'next/head';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../themes/default';
import GlobalStyles from "../styles/globals";
import profile from '../../data/profile.json';

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        <title>{`${profile.name} | ${profile.role}`}</title>
      </Head>
      <ThemeProvider theme={{darkMode: darkModeActive, ...theme}}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);
