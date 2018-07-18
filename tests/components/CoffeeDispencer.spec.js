import React from 'react';

import {
  shallow,
} from 'enzyme';

import CoffeeDispencer from '../../src/js/components/CoffeeDispencer.js';

describe('<CoffeeDispencer/>', () => {
  let wrapper;
  let secondDiv;
  let takeCoffeeSpy;
  const coffeeTest = {
    name: 'empty',
  };
  const correctDivsLength = 2;
  const secondDivTextContent = coffeeTest.name;

  beforeEach(() => {
    takeCoffeeSpy = sinon.spy();

    wrapper = shallow(
      <CoffeeDispencer
        coffee={coffeeTest}
        takeCoffee={takeCoffeeSpy}
      />);

    secondDiv = wrapper.find('div').at(1);
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render correctly number of divs', () => {
    expect(wrapper.find('div').length).to.equal(correctDivsLength);
  });

  it(`should render second div with ${secondDivTextContent} content`, () => {
    expect(wrapper.find('div').at(1).text()).to.equal(secondDivTextContent);
  });

  it('should trigger takeCoffeeSpy function when clicking second div', () => {
    secondDiv.simulate('click');
    expect(takeCoffeeSpy.calledOnce).to.equal(true);
  });
});
