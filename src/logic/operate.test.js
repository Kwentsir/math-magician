import operate from './operate';

describe('Calculate correctly', () => {
  test('1 + 1 should return 2', () => {
    const total = operate(1, 1, '+');
    expect(total).toEqual('2');
  });
});
