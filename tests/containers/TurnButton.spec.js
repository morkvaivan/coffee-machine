import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import TurnButtonDumb from '../../src/js/components/TurnButton';
import TurnButton from '../../src/js/containers/TurnButton';

describe('TurnButton Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><TurnButton /></Provider>);
  });

  it('should render TurnButton', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(TurnButtonDumb)).to.be.defined;
  });

  it('should pass offline to the dumb component in props', () => {
    const {
      offline,
    } = wrapper.find(TurnButtonDumb).props();

    expect(offline).to.equal(store.getState().connection.offline);
  });

  it('should pass triggerConnecting to the dumb component in props', () => {
    const {
      triggerConnecting,
    } = wrapper.find(TurnButtonDumb).props();

    expect(triggerConnecting).to.be.instanceof(Function);
  });
});
