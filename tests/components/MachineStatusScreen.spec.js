import React from 'react';

import {
  shallow,
} from 'enzyme';

import MachineStatusScreen from '../../src/js/components/MachineStatusScreen.js';

describe('<MachineStatusScreen/>', () => {
  let wrapper;
  const workingStatusTest = 'welcome';
  const totalTest = 123;
  const screenContentTest = 'welcomeTotal: $123';

  beforeEach(() => {
    wrapper = shallow(<MachineStatusScreen workingStatus={workingStatusTest} total={totalTest} />);
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it(`should render ${screenContentTest} text`, () => {
    expect(wrapper.text()).to.equal(screenContentTest);
  });
});
