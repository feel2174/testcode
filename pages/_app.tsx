import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import StyleProvider from 'styles/StyleProvider';

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
