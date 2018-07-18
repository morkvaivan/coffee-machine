import composeEnhancers from '../src/composeEnhancers';

describe('composeEnhancers', () => {
  let firstEnhancerSpy;
  let secondEnhancerSpy;
  let thirdEnhacerSpy;

  let returnedFunction;

  let thirdEnhacer;
  let returnedInnerThirdEnhancerSpy;

  const createStore = () => {};

  beforeEach(() => {
    returnedInnerThirdEnhancerSpy = sinon.spy();
    thirdEnhacer = () => returnedInnerThirdEnhancerSpy;

    firstEnhancerSpy = sinon.spy();
    secondEnhancerSpy = sinon.spy();
    thirdEnhacerSpy = sinon.spy();

    returnedFunction = composeEnhancers(firstEnhancerSpy, secondEnhancerSpy, thirdEnhacerSpy);
    returnedFunction(createStore);
  });

  it('should be function', () => {
    expect(composeEnhancers).to.be.instanceof(Function);
  });

  it('should returns a function if its called with no parameters', () => {
    const returnedFunction = composeEnhancers();

    expect(returnedFunction).to.be.instanceof(Function);
  });

  it('should returns a correctly function if its called with a function parameter', () => {
    const enhancer = () => {};
    const returnedFunction = composeEnhancers(enhancer);

    expect(returnedFunction).to.be.equal(enhancer);
  });

  it('should returns a function if its called with a lot of function parameters', () => {
    expect(returnedFunction).to.be.instanceof(Function);
  });

  it('returned function should once calls enhancers', () => {
    expect(firstEnhancerSpy.calledOnce).to.equal(true);
    expect(secondEnhancerSpy.calledOnce).to.equal(true);
    expect(thirdEnhacerSpy.calledOnce).to.equal(true);
  });

  it('returned function should calls the last enhancer with the passed createStore function', () => {
    expect(thirdEnhacerSpy.calledWith(createStore)).to.equal(true);
  });

  it('returned function should calls enhancers from the last to the first parameter', () => {
    expect(firstEnhancerSpy.calledAfter(secondEnhancerSpy)).to.equal(true);
    expect(secondEnhancerSpy.calledAfter(thirdEnhacerSpy)).to.equal(true);
  });

  it('returned function should calls the current enhancer with the previous one', () => {
    returnedFunction = composeEnhancers(firstEnhancerSpy, secondEnhancerSpy, thirdEnhacer);
    returnedFunction(createStore);

    expect(secondEnhancerSpy.calledWith(returnedInnerThirdEnhancerSpy)).to.equal(true);
  });
});
