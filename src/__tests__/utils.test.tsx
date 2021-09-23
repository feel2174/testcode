import functions from '../../utils/functions';

//toBe는 원시 타입을 비교
//toEqual은 객체 혹은 배열을 비교

// test('1.5초 후 이름', (done) => {
//   function callback(name: string) {
//     try {
//       expect(name).toBe('Mike');
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   functions.getName(callback);
// });

test('3초 후 나이', async () => {
  // const age = await functions.getAge();
  // expect(age).toBe(30);
  // return functions.getAge().then((age) => {
  //   expect(age).toBe(30);
  //   //Promise로 비동기 test 시 'return' 필수
  // });
  await expect(functions.getAge()).resolves.toBe(30);
});

// test('User should be Joshua Song', () => {
//   expect(functions.createUser()).toEqual({
//     firstName: 'Joshua',
//     lastName: 'Song',
//   });
// });

// //* Async Await
// test('User fetched name should be 이정도', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('이정도');
// });
