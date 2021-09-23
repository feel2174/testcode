import { Box } from '@chakra-ui/layout';
import Account from 'components/Account/Account';

import HookForm from 'components/Form/HookForm';

export default function Home() {
  return (
    <>
      <Box p={16}>
        <Account />
        <HookForm />
      </Box>
    </>
  );
}
