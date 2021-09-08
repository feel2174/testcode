import { ThemeProvider } from 'styled-components';

import { light } from 'styles/theme';
import GlobalStyle from 'styles/globals';

interface Props {
  children: React.ReactNode;
}

const StyledProvider = ({ children }: Props) => {
  const theme = light;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
