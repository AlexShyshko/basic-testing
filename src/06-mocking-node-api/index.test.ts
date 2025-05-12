// Uncomment the code below and write your tests
import { doStuffByTimeout, doStuffByInterval } from '.';
// npx jest src/06-mocking-node-api/index.test.ts --verbose
describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const mockedCallback = jest.fn();
    const timeout = 100000;
    doStuffByTimeout(mockedCallback, timeout);
    expect(setTimeout).toHaveBeenCalledWith(mockedCallback, timeout);
    expect(mockedCallback).not.toHaveBeenCalledTimes(1);
  });

  test('should call callback only after timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const mockedCallback = jest.fn();
    const timeout = 100000;
    doStuffByTimeout(mockedCallback, timeout);
    expect(setTimeout).toHaveBeenCalledWith(mockedCallback, timeout);
    jest.advanceTimersByTime(timeout);
    expect(mockedCallback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const mockedCallback = jest.fn();
    const interval = 100000;
    const intervalCount = 7;
    doStuffByInterval(mockedCallback, interval);
    expect(setInterval).toHaveBeenCalledWith(mockedCallback, interval);
    expect(mockedCallback).not.toHaveBeenCalledTimes(intervalCount);
  });

  test('should call callback multiple times after multiple intervals', () => {
    jest.spyOn(global, 'setInterval');
    const mockedCallback = jest.fn();
    const interval = 100000;
    const intervalCount = 7;
    doStuffByInterval(mockedCallback, interval);
    expect(setInterval).toHaveBeenCalledWith(mockedCallback, interval);
    jest.advanceTimersByTime(interval * intervalCount);
    expect(mockedCallback).toHaveBeenCalledTimes(intervalCount);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
