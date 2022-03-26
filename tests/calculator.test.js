const calculator = require('./calculator')

test('expect calculator.add(1,2) to equals 3', () => {
  expect(calculator.add(1,2)).toBe(3);
})
test('expect calculator.substract(1,2) to equals -1', () => {
  expect(calculator.substract(1,2)).toBe(-1);
})
test('expect calculator.divide(1,2) to equals 0.5', () => {
  expect(calculator.divide(1,2)).toBe(0.5);
})
test('expect calculator.multiply(1,2) to equals 2', () => {
  expect(calculator.multiply(1,2)).toBe(2);
})