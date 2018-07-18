import React from 'react';
import {
  mount,
} from 'enzyme';
import PaymentForm from '../../src/js/components/PaymentForm/PaymentForm';

describe('<PaymentForm/>', () => {
  let wrapper;
  function payCash() {}
  const paymentFieldsLength = 1;

  beforeEach(() => {
    wrapper = mount(
      <PaymentForm
        payCash={payCash}
      />
    );
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render PaymentField element', () => {
    expect(wrapper.find('PaymentField').length).to.equal(paymentFieldsLength);
  });

  it('should set payCash to PaymentField props', () => {
    expect(wrapper.find('PaymentField').at(0).props().onBlur).to.equal(payCash);
  });
});
