import React from 'react';
import { mount } from 'enzyme';
import connect from '../src/connect';

describe('Connector and connect', () => {
  let wrapper;

  const childComponentTextContent = 'test child';
  const ChildComponent = () => (<div>{childComponentTextContent}</div>);

  let mapStateToPropsSpy;
  let mapDispatchToPropsSpy;

  let subscribeSpy;
  let unsubscribeSpy;
  let subscribeListeners;

  beforeEach(() => {
    mapStateToPropsSpy = sinon.spy();
    mapDispatchToPropsSpy = sinon.spy();

    subscribeSpy = sinon.spy();
    unsubscribeSpy = sinon.spy();
    subscribeListeners = [];

    const context = {
      store:
      {
        getState: () => {},
        subscribe: (listener) => {
          subscribeSpy();
          subscribeListeners.push(listener);
        },
        unsubscribe: (listener) => {
          unsubscribeSpy();
          subscribeListeners = subscribeListeners.filter((l) => l !== listener);
        },
        state: { count: 1 },
      },
    };

    const Connector = connect(mapStateToPropsSpy, mapDispatchToPropsSpy)(ChildComponent);
    wrapper = mount(<Connector />, { context });
  });
  it('should be function', () => {
    expect(connect).to.be.instanceof(Function);
  });

  it('should trigger mapStateToPropsSpy and mapDispatchToPropsSpy functions when connect called', () => {
    expect(mapStateToPropsSpy.calledOnce).to.equal(true);
    expect(mapDispatchToPropsSpy.calledOnce).to.equal(true);
  });

  it('should trigger subscribeSpy function when Connector did mount', () => {
    expect(subscribeSpy.calledOnce).to.equal(true);
  });

  it('should trigger unsubscribeSpy function when Connector will unmount', () => {
    wrapper.unmount();
    expect(unsubscribeSpy.calledOnce).to.equal(true);
  });

  it('should trigger mapStateToPropsSpy and mapDispatchToPropsSpy functions when store was changed', () => {
    subscribeListeners.forEach((listener) => listener());

    expect(mapStateToPropsSpy.calledTwice).to.equal(true);
    expect(mapDispatchToPropsSpy.calledTwice).to.equal(true);
  });

  it('should render element', () => {
    expect(wrapper).to.be.defined;
  });

  it('should render one div element', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });

  it(`should render ${childComponentTextContent} component`, () => {
    expect(wrapper.find('div').text()).to.equal(childComponentTextContent);
  });

});
