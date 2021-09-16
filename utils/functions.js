import axios from 'axios';

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Joshua' };
    user['lastName'] = 'Song';
    return user;
  },
  repeat: (word, times = 2) => {
    let words = [];
    for (let i = 0; i < times; i++) {
      words.push(word);
    }
    return words.join(); // 베열 대신 문자열 반환
  },
  fetchUser: () =>
    axios
      .get('https://koreanjson.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'error'),
};

export default functions;
