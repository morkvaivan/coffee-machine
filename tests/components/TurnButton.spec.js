import React from 'react';

import {
  shallow,
} from 'enzyme';

import TurnButton from '../../src/js/components/TurnButton';

describe('<TurnButton/>', () => {
  let wrapper;
  let triggerConnectingSpy;
  let offlineTest = true;

  beforeEach(() => {
    triggerConnectingSpy = sinon.spy();
    wrapper = shallow(
      <TurnButton
        triggerConnecting={triggerConnectingSpy}
        offline={offlineTest}
      />
    );
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render one input with type checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').length).to.equal(1);
  });

  it('should render input with attribute checked true', () => {
    expect(wrapper.find('input').props().checked).to.equal(true);
  });

  it('should set attribute checked false', () => {
    offlineTest = false;
    wrapper.setProps({ offline: offlineTest });

    expect(wrapper.find('input').props().checked).to.equal(false);
  });

  it('should trigger triggerConnectingSpy function on input change event', () => {
    wrapper.find('input').simulate('change');
    expect(triggerConnectingSpy.calledOnce).to.equal(true);
  });
});
