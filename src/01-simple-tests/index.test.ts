// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';
// npx jest src/01-simple-tests/index.test.ts --verbose
describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Add }),
    ).toBe(Infinity);
  });

  test('should subtract two numbers', () => {
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Subtract }),
    ).toBe(NaN);
  });

  test('should multiply two numbers', () => {
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Multiply }),
    ).toBe(Infinity);
  });

  test('should divide two numbers', () => {
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Divide }),
    ).toBe(NaN);
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({
        a: Infinity,
        b: Infinity,
        action: Action.Exponentiate,
      }),
    ).toBe(Infinity);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: Infinity, b: Infinity, action: '%' })).toBe(
      null,
    );
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: 'Milk', b: 'Banana', action: Action.Add }),
    ).toBe(null);
  });
});
