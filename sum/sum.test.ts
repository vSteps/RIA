import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 17 + 52 to equal 69', () => {
  expect(sum(17, 52)).toBe(69);
});

test('adds 1 + -2 to equal -1', () => {
  expect(sum(1, -2)).toBe(-1);
});