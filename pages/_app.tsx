import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import StyleProvider from 'styles/StyleProvider';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </ChakraProvider>
  );
};
export default MyApp;
