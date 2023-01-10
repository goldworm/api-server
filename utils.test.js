import { getUserId } from './utils.js';

test('getUserId', () => {
  const id = 'hello';
  expect(getUserId(id)).toBe(`user-${id}`);
});