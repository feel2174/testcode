import { Box } from '@chakra-ui/layout';

const Account = (props: { name?: string; mbti?: string; age?: number }) => {
  const { name = 'hello', mbti = 'dfdf', age = 123 } = props;
  return (
    <Box d="flex" maxW="sm" maxH="lg" h="100px" border="1px solid black" justifyContent="center" alignItems="center">
      <h2>{name}</h2>
      <p>{mbti}</p>
      <p>{age}</p>
    </Box>
  );
};

export default Account;
