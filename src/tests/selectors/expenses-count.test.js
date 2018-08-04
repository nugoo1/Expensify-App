import expensesCount from '../../selectors/expenses-count';
import expenses from '../fixtures/expenses';

test('should return expensesCount with no expenses',() => {
  const res = expensesCount([]);
  expect(res).toBe(0);
});

test('should return expensesCount with a single expense',() => {
    const res = expensesCount(expenses[1]);
    expect(res).toBe(1);
  });

  test('should return expensesCount with multiple expenses',() => {
    const res = expensesCount(expenses);
    expect(res).toBe(3);
  });