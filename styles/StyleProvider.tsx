import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import GlobalStyle from 'styles/globals';

interface Props {
  children: React.ReactNode;
}

const StyledProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
