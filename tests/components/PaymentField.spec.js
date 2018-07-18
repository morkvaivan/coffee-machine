import React from 'react';

import {
  mount,
} from 'enzyme';

import PaymentField from '../../src/js/components/PaymentForm/PaymentField';

describe('<PaymentField/>', () => {
  let wrapper;
  let onBlurSpy;
  const testValue = 123;
  const labelContentTest = 'labelContent';

  beforeEach(() => {
    onBlurSpy = sinon.spy();
    wrapper = mount(<PaymentField onBlur={onBlurSpy} labelContent={labelContentTest} />);

    const inputNode = wrapper.find('input').get(0);
    inputNode.value = testValue;
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render one input with type text', () => {
    expect(wrapper.find('input[type="text"]').length).to.equal(1);
  });

  it(`should render one label with ${labelContentTest} content`, () => {
    expect(wrapper.find('label').length).to.equal(1);
    expect(wrapper.find('label').text()).to.equal(labelContentTest);
  });

  it('should trigger onBlurSpy function on inputs blur event', () => {
    wrapper.find('input').simulate('blur');
    expect(onBlurSpy.calledOnce).to.equal(true);
  });

  it('should call onBlurSpy on blur with correct value', () => {
    wrapper.find('input').simulate('blur');
    expect(onBlurSpy.calledWith(testValue)).to.equal(true);
  });
});
