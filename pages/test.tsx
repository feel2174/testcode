import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React, { useReducer } from 'react';

const initialState = { count: 0 };

type ACTION_TYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: number };

function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Box p={4} d="flex" flexDirection="column" m="0 auto" h="100vh">
        Count: {state.count}
        <Box d="flex">
          <Button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</Button>
          <Button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</Button>
        </Box>
      </Box>
    </>
  );
}
