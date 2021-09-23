import axios from 'axios';

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  makeUser: (name, age, gender) => ({ name, age, gender: undefined }),
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
    return words.join();
  },
  getUser: (id) => {
    if (id <= 0) throw new Error('Invalid ID');
    return {
      id,
      email: `user${id}@test.com`,
    };
  },
  getName: (callback) => {
    const name = 'Mike';
    setTimeout(() => {
      callback(name);
    }, 1500);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },

  fetchUser: () =>
    axios
      .get('https://koreanjson.com/users/1')
      .then((res) => res.data)
      .catch((err) => console.log(err)),
};

export default functions;
