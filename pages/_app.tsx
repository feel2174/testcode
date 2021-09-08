import type { AppProps } from 'next/app';
import StyledProvider from 'components/StyledProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledProvider>
      <Component {...pageProps} />
    </StyledProvider>
  );
}
export default MyApp;
