const bindActionCreators = (actionCreators, dispatch) => {
  if (typeof actionCreators !== 'object') {
    const invalidType = typeof actionCreators;
    throw Error(`${invalidType} is not a correct type. actionCreators should be an object`);
  }

  if (typeof dispatch !== 'function') {
    const invalidType = typeof dispatch;
    throw Error(`${invalidType} is not a correct type. dispatch should be a function`);
  }

  const actionCreatorsNames = Object.keys(actionCreators);
  const boundActionCreators = {};

  actionCreatorsNames.forEach((name) => {
    boundActionCreators[name] = (...args) => dispatch(actionCreators[name](...args));
  });

  return boundActionCreators;
};

export default bindActionCreators;
