import React from 'react';

import {
  mount,
} from 'enzyme';

import {
  Provider,
} from 'react-redux';
import CoffeeMachine from '../../src/js/components/CoffeeMachine.js';
import buildStore from '../../src/js/store/index';

describe('<CoffeeMachine/>', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = buildStore();

    wrapper = mount(
      <Provider store={store}>
        <CoffeeMachine />
      </Provider>);
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render TurnButton element', () => {
    expect(wrapper.find('TurnButton').length).to.equal(1);
  });

  it('should render PaymentForm element', () => {
    expect(wrapper.find('PaymentForm').length).to.equal(1);
  });

  it('should render CashBox element', () => {
    expect(wrapper.find('CashBox').length).to.equal(1);
  });

  it('should render CoffeeDispencer element', () => {
    expect(wrapper.find('CoffeeDispencer').length).to.equal(1);
  });

  it('should render CoffeesList element', () => {
    expect(wrapper.find('CoffeesList').length).to.equal(1);
  });

  it('should render MachineStatusScreen element', () => {
    expect(wrapper.find('MachineStatusScreen').length).to.equal(1);
  });
});
