import Account from './Account';
import { render } from '@testing-library/react';

test('matches snapshot', () => {
  const utils = render(<Account name="너구리호박" mbti="INFP" age={30} />);
  expect(utils.container).toMatchSnapshot();
});
