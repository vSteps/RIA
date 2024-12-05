import multiply from './multiply';

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('multiplies -5 * 5 to equal -25', () => {
  expect(multiply(-5, 5)).toBe(-25);
});

test('multiplies 0 * 7 to equal 0', () => {
  expect(multiply(0, 7)).toBe(0);
});