import React, { Component, PropTypes } from 'react';
import { mount } from 'enzyme';

import Provider from '../src/Provider';

describe('<Provider/>', () => {
  let wrapper;
  const childComponentTestContextValue = 'test';
  const store = { testValue: childComponentTestContextValue };

  class ChildComponent extends Component {
    render() { return null; }
  }

  ChildComponent.contextTypes = {
    store: PropTypes.object,
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ChildComponent />
      </Provider>
    );
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render one child element', () => {
    expect(wrapper.find('ChildComponent').length).to.equal(1);
  });

  it('should pass store into context of child component', () => {
    expect(wrapper.find('ChildComponent').get(0).context.store.testValue).to.equal(childComponentTestContextValue);
  });
});
