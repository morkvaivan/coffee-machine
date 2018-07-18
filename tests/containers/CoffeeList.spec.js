import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  mount,
} from 'enzyme';

import buildStore from '../../src/js/store/index';
import CoffeeListDumb from '../../src/js/components/CoffeesList';
import CoffeeList from '../../src/js/containers/CoffeesList';

describe('CoffeeList Connector', () => {
  const store = buildStore();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><CoffeeList /></Provider>);
  });

  it('should render CoffeeList', () => {
    expect(wrapper).to.be.defined;
    expect(wrapper.find(CoffeeListDumb)).to.be.defined;
  });

  it('should pass coffees to the dumb component in props', () => {
    const {
      coffees,
    } = wrapper.find(CoffeeListDumb).props();

    expect(coffees).to.equal(store.getState().goods.list);
  });

  it('should pass selectCoffee to the dumb component in props', () => {
    const {
      selectCoffee,
    } = wrapper.find(CoffeeListDumb).props();

    expect(selectCoffee).to.be.instanceof(Function);
  });
});
