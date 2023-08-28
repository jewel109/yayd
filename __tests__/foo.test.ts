import { test, expect } from '@jest/globals'

function sum(a, b) {
  return a + b
}

describe("sum function", () => {

  test("adds 1 + 2 equals to 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
})
