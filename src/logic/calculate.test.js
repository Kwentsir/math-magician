import calculate from './calculate';
import operate from './operate';

describe('Calculate correctly', () => {
  test('AC should clear the total, operation and next', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
  it('calculate with button name of =', () => {
    const obj = {
      total: 3,
      next: 2,
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual(
      {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      },
    );
  });
  it('calculate with button name of .', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual(
      {
        total: null,
        next: '2.',
        operation: null,
      },
    );
  });
});
