const { add } = require('../src/StringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});
