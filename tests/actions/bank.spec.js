import * as actions from '../../src/js/Bank/actions/bank';
import * as actionTypes from '../../src/js/Bank/constants/bank';

describe('bank actions', () => {
  const testValue = 25;
  const testTransaction = {
    cashChange: 2,
    coins: {
      ['25']: 12,
    },
  };

  it(`removeCashChange should return ${actionTypes.REMOVE_CASH_CHANGE} action type`, () => {
    const expectedActionType = actionTypes.REMOVE_CASH_CHANGE;
    const returnedValue = actions.removeCashChange();
    const actualActionType = returnedValue.type;
    expect(expectedActionType).to.be.equal(actualActionType);
  });

  it(`enterTotal should return value of correct type and ${actionTypes.ENTER_TOTAL} action type`, () => {
    const expectedActionType = actionTypes.ENTER_TOTAL;
    const returnedValue = actions.enterTotal(testValue);
    const actualActionType = returnedValue.type;
    const actualValue = returnedValue.payload;
    expect(expectedActionType).to.be.equal(actualActionType);
    expect(actualValue).to.be.a('number');
  });

  it(`applyTransaction should return value of correct type and ${actionTypes.APPLY_TRANSACTION} action type`, () => {
    const expectedActionType = actionTypes.APPLY_TRANSACTION;
    const returnedValue = actions.applyTransaction(testTransaction);
    const actualActionType = returnedValue.type;
    const actualValue = returnedValue.payload;
    expect(expectedActionType).to.be.equal(actualActionType);
    expect(actualValue).to.be.a('object');
  });
});
