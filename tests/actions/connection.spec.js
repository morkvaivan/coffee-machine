import * as actions from '../../src/js/Connection/actions/connection';
import * as actionTypes from '../../src/js/Connection/constants/connection';

describe('energy actions', () => {
  it(`triggerConnecting should return ${actionTypes.TRIGGER_CONNECTION} action type`, () => {
    const expectedActionType = actionTypes.TRIGGER_CONNECTION;
    const returnedValue = actions.triggerConnecting();
    const actualActionType = returnedValue.type;
    expect(expectedActionType).to.be.equal(actualActionType);
  });
});
