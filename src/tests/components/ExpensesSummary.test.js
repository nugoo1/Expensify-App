import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
// import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal= {250} />);
    expect(wrapper).toMatchSnapshot();
    });

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal= {23516415664} />);
    expect(wrapper).toMatchSnapshot();
    });