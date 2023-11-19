import { add } from "./mathFunctions";

test('add function adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(1);
});

describe('add function integration tests', () => {
  test('adding positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adding negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('adding a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });
});
