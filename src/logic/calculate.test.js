import calculate from './calculate';

describe('Calculate correctly', () => {
  test('AC should clear the total, operation and next', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
});
