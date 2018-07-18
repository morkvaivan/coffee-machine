import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import CashBoxDumb from '../../src/js/components/CashBox';
import CashBox from '../../src/js/containers/CashBox';

describe('CashBox Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><CashBox /></Provider>);
  });

  it('should render CashBox', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(CashBoxDumb)).to.be.defined;
  });

  it('should pass cashChange to the dumb component in props', () => {
    const {
      cashChange,
    } = wrapper.find(CashBoxDumb).props();

    expect(cashChange).to.equal(store.getState().bank.cashChange);
  });

  it('should pass removeCashChange like takeCashChange to the dumb component in props', () => {
    const {
      takeCashChange,
    } = wrapper.find(CashBoxDumb).props();

    expect(takeCashChange).to.be.instanceof(Function);
  });
});
