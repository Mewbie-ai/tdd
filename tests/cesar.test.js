const cesar = require('./cesar')

test('expect "test" to become "uftu"', () => {
  expect(cesar("test", 1)).toBe("uftu");
})