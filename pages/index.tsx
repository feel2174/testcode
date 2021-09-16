import { Box } from '@chakra-ui/layout';
import { ThemeConsumer } from 'styled-components';

import HookForm from 'components/Form/HookForm';

export default function Home() {
  return (
    <>
      <ThemeConsumer>
        {(_theme) => (
          <Box p={16}>
            <HookForm />
          </Box>
        )}
      </ThemeConsumer>
    </>
  );
}
