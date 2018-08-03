import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import RemoveModal from '../../components/RemoveModal';

test('should render RemoveModal page', () => {
    const wrapper = shallow(<RemoveModal />)
    expect(wrapper).toMatchSnapshot();
});
