// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import theme from '@/styles/theme';
import Layout from '@/components/Layout';
import { CartProvider } from '@/context/cart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}
