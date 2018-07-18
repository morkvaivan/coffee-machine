import bindActionCreators from '../src/bindActionCreators';

describe('bindActionCreators', () => {
  const invalidArgument = 'invalid';
  const invalidArgumentType = typeof invalidArgument;
  const dispatch = () => {};
  const increment = () => {};
  const decrement = () => {};
  const actionsCreators = { increment, decrement };

  it('should be function', () => {
    expect(bindActionCreators).to.be.instanceof(Function);
  });

  it('should throw error if the first param is not object', () => {
    const errText = `${invalidArgumentType} is not a correct type. actionCreators should be an object`;
    const callBindActionCreators = () => { bindActionCreators(invalidArgument, dispatch); };

    expect(callBindActionCreators).to.throw(errText);
  });

  it('should throw error if the second param is not function', () => {
    const errText = `${invalidArgumentType} is not a correct type. dispatch should be a function`;
    const callBindActionCreators = () => { bindActionCreators(actionsCreators, invalidArgument); };

    expect(callBindActionCreators).to.throw(errText);
  });

  it('should return object', () => {
    const boundActionCreators = bindActionCreators(actionsCreators, dispatch);

    expect(boundActionCreators).to.be.instanceof(Object);
  });

  it('should return object within bound actionCreators', () => {
    const boundActionCreators = bindActionCreators(actionsCreators, dispatch);

    expect(boundActionCreators.increment).to.be.instanceof(Function);
    expect(boundActionCreators.decrement).to.be.instanceof(Function);
  });
});
