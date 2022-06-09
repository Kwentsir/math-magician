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

describe('Multiplication', () => {
  it('multiplies 4 by 5 should return 20', () => {
    const result = operate(4, 5, 'x');
    expect(result).toBe('20');
  });
  it('multiplies 4 by 0 should return 0', () => {
    const result = operate(4, 0, 'x');
    expect(result).toBe('0');
  });
  it('multiplies 4 by -1 should return 0', () => {
    const result = operate(4, -1, 'x');
    expect(result).toBe('-4');
  });
});

describe('division', () => {
  it('divides 4 by 2', () => {
    const result = operate(4, 2, '÷');
    expect(result).toBe('2');
  });
  it('divides 4 by 0', () => {
    const result = operate(4, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  it('divides 4 by -2', () => {
    const result = operate(4, -2, '÷');
    expect(result).toBe('-2');
  });
});
