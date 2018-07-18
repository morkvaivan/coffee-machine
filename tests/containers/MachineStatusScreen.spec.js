import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import MachineStatusScreenDumb from '../../src/js/components/MachineStatusScreen';
import MachineStatusScreen from '../../src/js/containers/MachineStatusScreen';

describe('MachineStatusScreen Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><MachineStatusScreen /></Provider>);
  });

  it('should render MachineStatusScreen', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(MachineStatusScreenDumb)).to.be.defined;
  });

  it('should pass total to the dumb component in props', () => {
    const {
      total,
    } = wrapper.find(MachineStatusScreenDumb).props();

    expect(total).to.equal(store.getState().bank.total);
  });
});
