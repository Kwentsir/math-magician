import operate from './operate';

describe('Adds correctly', () => {
  test('Adds 1 + 1 should return 2', () => {
    const total = operate(1, 1, '+');
    expect(total).toEqual('2');
  });
  test('Adds 1  to negative - 1 should return 0', () => {
    const total = operate(1, -1, '+');
    expect(total).toEqual('0');
  });
  test('Adds 1 + 0 should return 1', () => {
    const total = operate(1, 0, '+');
    expect(total).toEqual('1');
  });
});

describe('Calculate the subtraction operation', () => {
  it('Subtracts 2 from 6 return -4', () => {
    const total = operate(2, 6, '-');
    expect(total).toBe('-4');
  });

  it('Subtracts 2 from 0 return 2', () => {
    const total = operate(2, 0, '-');
    expect(total).toBe('2');
  });
  it('Subtracts 2 from -1 return 3', () => {
    const total = operate(2, -1, '-');
    expect(total).toBe('3');
  });
});
