const { add } = require('../src/StringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number for a single number string', () => {
    expect(add("1")).toEqual(1);
});

test('should return the sum of two numbers', () => {
    expect(add("1,2")).toEqual(3);
});
