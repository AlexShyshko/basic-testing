// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';
// npx jest src/02-table-tests/index.test.ts --verbose
const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions
  { a: Infinity, b: Infinity, action: Action.Add, expected: Infinity },
  { a: Infinity, b: Infinity, action: Action.Subtract, expected: NaN },
  { a: Infinity, b: Infinity, action: Action.Multiply, expected: Infinity },
  { a: Infinity, b: Infinity, action: Action.Divide, expected: NaN },
  { a: Infinity, b: Infinity, action: Action.Exponentiate, expected: Infinity },
  { a: Infinity, b: Infinity, action: '%', expected: null },
  { a: 'Milk', b: 'Banana', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '$a $action $b = $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
    1000,
  );
});
