import { expect, test } from '@jest/globals'
import { getUserId } from './utils'

test('getUserId', () => {
  const id = 'hello'
  expect(getUserId(id)).toBe(`user-${id}`)
})
