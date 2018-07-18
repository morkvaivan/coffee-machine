import React from 'react';

import {
  shallow,
} from 'enzyme';

import CoffeesList from '../../src/js/components/CoffeesList.js';

describe('<CoffeesList/>', () => {
  let wrapper;
  let firstButton;
  let selectCoffeeSpy;
  const coffeesTest = [
    {
      name: 'Espresso',
      price: 1.5,
    },
    {
      name: 'Americano',
      price: 1,
    },
    {
      name: 'Cappuccino',
      price: 3.5,
    },
  ];
  const divsLength = coffeesTest.length + 1;
  const secondDivTextContent = `${coffeesTest[0].name}$${coffeesTest[0].price}`;
  const firstButtonTextContent = '$1.5';

  beforeEach(() => {
    selectCoffeeSpy = sinon.spy();

    wrapper = shallow(<CoffeesList coffees={coffeesTest} selectCoffee={selectCoffeeSpy} />);
    firstButton = wrapper.find('button').at(0);
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render correctly number of divs', () => {
    expect(wrapper.find('div').length).to.equal(divsLength);
  });

  it(`should render second div with ${secondDivTextContent} content`, () => {
    expect(wrapper.find('div').at(1).text()).to.equal(secondDivTextContent);
  });

  it('should render correctly number of buttons', () => {
    expect(wrapper.find('button').length).to.equal(coffeesTest.length);
  });

  it(`should render first button with ${firstButtonTextContent} content`, () => {
    expect(firstButton.text()).to.equal(firstButtonTextContent);
  });

  it('should trigger selectCoffeeSpy function when clicking button', () => {
    firstButton.simulate('click');
    expect(selectCoffeeSpy.calledOnce).to.equal(true);
  });

  it('should trigger selectCoffeeSpy on click with correct value', () => {
    firstButton.simulate('click');

    expect(selectCoffeeSpy.calledWith(coffeesTest[0])).to.equal(true);
  });

});
