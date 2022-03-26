const reverseString = require('./reverseString')

test('expect "test" to become "tset"', () => {
  expect(reverseString("test")).toBe("tset");
})
