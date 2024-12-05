import factorial from './factorial';

test('test the factorial of the number 4', () => {
  expect(factorial(4)).toBe(24);
});

test('test the factorial of the number 10', () => {
  expect(factorial(10)).toBe(3628800);
});

test('test the factorial of the number 1', () => {
  expect(factorial(1)).toBe(1);
});

test('test the factorial of the number 0', () => {
  expect(factorial(0)).toBe(1);
});

test('test the factorial of the number 2', () => {
  expect(factorial(2)).toBe(2);
});
