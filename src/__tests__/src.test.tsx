import functions from '../../utils/functions';

//toBe는 원시 타입을 비교
//toEqual은 객체 혹은 배열을 비교

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Joshua Song', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Joshua',
    lastName: 'Song',
  });
});

//* Async Await
test('User fetched name should be 이정도', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('이정도');
});
