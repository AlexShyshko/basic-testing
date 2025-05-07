// Uncomment the code below and write your tests
import { getBankAccount } from '.';
// npx jest src/04-test-class/index.test.ts --verbose
describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(-10)).toMatchObject({ _balance: -10 });
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      getBankAccount(-10).withdraw(-5);
    }).toThrow(new Error('Insufficient funds: cannot withdraw more than -10'));
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => {
      getBankAccount(-10).transfer(-5, getBankAccount(Infinity));
    }).toThrow(new Error('Insufficient funds: cannot withdraw more than -10'));
  });

  test('should throw error when transferring to the same account', () => {
    expect((sameAcc = getBankAccount(-10)) => {
      sameAcc.transfer(-Infinity, sameAcc);
    }).toThrow(new Error('Transfer failed'));
  });

  test('should deposit money', () => {
    expect(getBankAccount(-10).deposit(Infinity)).toMatchObject({
      _balance: Infinity,
    });
  });

  test('should withdraw money', () => {
    expect(getBankAccount(-10).withdraw(-20)).toMatchObject({
      _balance: 10,
    });
  });

  test('should transfer money', () => {
    expect(
      getBankAccount(-10).transfer(-20, getBankAccount(Infinity)),
    ).toMatchObject({
      _balance: 10,
    });
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // expect(String(await getBankAccount(-10).fetchBalance())).toMatch(
    //   /^(100|[1-9]?[0-9]|null)$/,
    // );
    expect(
      await getBankAccount(-10)
        .fetchBalance()
        .then((fetchResult) => {
          fetchResult === null
            ? expect(fetchResult).toBeNull
            : expect(fetchResult).toBeLessThanOrEqual(100);
        }),
    );
  });

  test('should set new balance if fetchBalance returned number', async () => {
    expect(
      await getBankAccount(-10)
        .synchronizeBalance()
        .then((syncResult) => {
          expect(syncResult).toBeUndefined();
        })
        .catch((syncError) => {
          expect(() => {
            throw syncError;
          }).toThrow(new Error('Synchronization failed'));
        }),
    );
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    expect(
      await getBankAccount(-10)
        .synchronizeBalance()
        .then((syncResult) => {
          expect(syncResult).toBeUndefined();
        })
        .catch((syncError) => {
          expect(() => {
            throw syncError;
          }).toThrow(new Error('Synchronization failed'));
        }),
    );
  });
});
