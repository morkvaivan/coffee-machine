import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import PaymentFormDumb from '../../src/js/components/PaymentForm/PaymentForm';
import PaymentForm from '../../src/js/containers/PaymentForm';

describe('PaymentForm Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><PaymentForm /></Provider>);
  });

  it('should render PaymentForm', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(PaymentFormDumb)).to.be.defined;
  });

  it('should pass enterTotal like payCash to the dumb component in props', () => {
    const {
      payCash,
    } = wrapper.find(PaymentFormDumb).props();

    expect(payCash).to.be.instanceof(Function);
  });
});
