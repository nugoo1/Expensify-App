import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { LoginPage } from '../../components/LoginPage'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click', {
    preventDefault: () => { }
  });
  expect(startLogoutSpy).toHaveBeenCalled();
});

// test('should call startLogin on google login button click', () => {
//   const buttonSpies = () => ({
//     startLoginFacebook: () => jest.fn(),
//     startLogin: () => jest.fn(),
// });
//   const wrapper = shallow(<LoginPage spies={ buttonSpies } />);
//   wrapper.find('button').at(0).simulate('click', {
//     preventDefault: () => { }
//   });
//   expect(buttonSpies().startLogin()).toHaveBeenCalled();
// });

// test('should call startLogin on google login button click', () => {
//   const buttonSpies = () => ({
//     startLogin: () => jest.fn(),
//     startLoginFacebook: () => jest.fn()
// });
//   const wrapper = shallow(<LoginPage spies={ buttonSpies } />);
//   wrapper.find('button').at(1).simulate('click', {
//     preventDefault: () => { }
//   });
//   expect(buttonSpies().startLoginFacebook()).toHaveBeenCalled();
// });
