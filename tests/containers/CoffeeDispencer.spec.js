import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import CoffeeDispencerDumb from '../../src/js/components/CoffeeDispencer';
import CoffeeDispencer from '../../src/js/containers/CoffeeDispencer';

describe('CoffeeDispencer Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><CoffeeDispencer /></Provider>);
  });

  it('should render CoffeeDispencer', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(CoffeeDispencerDumb)).to.be.defined;
  });

  it('should pass selectedGood like coffee to the dumb component in props', () => {
    const {
      coffee,
    } = wrapper.find(CoffeeDispencerDumb).props();

    expect(coffee).to.equal(store.getState().goods.selectedGood);
  });

  it('should pass deselectGood like takeCoffee to the dumb component in props', () => {
    const {
      takeCoffee,
    } = wrapper.find(CoffeeDispencerDumb).props();

    expect(takeCoffee).to.be.instanceof(Function);
  });
});
