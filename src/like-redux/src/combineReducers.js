const combineReducers = (reducers) => (oldState = {}, action) => {
  const reducersType = typeof reducers;
  if (reducersType !== 'object') {
    throw new Error(`reducers type is ${reducersType}. Its should be an object type`);
  }

  const actionType = typeof action;
  if (actionType !== 'object') {
    throw new Error(`action type is ${actionType}. Its should be an object type`);
  }

  const reducersNames = Object.keys(reducers);
  const newState = {};

  reducersNames.forEach((name) => {
    newState[name] = reducers[name](oldState[name], action);
  });

  return newState;
};

export default combineReducers;
