import React from 'react';

import {
  shallow,
} from 'enzyme';

import CashBox from '../../src/js/components/CashBox.js';

describe('<CashBox/>', () => {
  let wrapper;
  let secondDiv;
  let takeCashChangeSpy;
  const cashChangeTest = 10;
  const correctDivsLength = 2;
  const secondDivTextContent = `${cashChangeTest}`;

  beforeEach(() => {
    takeCashChangeSpy = sinon.spy();

    wrapper = shallow(
      <CashBox
        cashChange={cashChangeTest}
        takeCashChange={takeCashChangeSpy}
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

  it('should trigger takeCashChangeSpy function when clicking second div', () => {
    secondDiv.simulate('click');
    expect(takeCashChangeSpy.calledOnce).to.equal(true);
  });
});
