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

test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3")).toEqual(6);
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toEqual(6);
});

it('should support different delimiters', () => {
    expect(add("//;\n1;2")).toEqual(3);
});

it('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3,-4")).toThrowError('negative numbers not allowed: -2,-4');
});

