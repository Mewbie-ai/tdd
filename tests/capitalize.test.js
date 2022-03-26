const capitalize = require('./capitalize')

test('expect "test" to become "Test"', () => {
  expect(capitalize("test")).toBe("Test");
})