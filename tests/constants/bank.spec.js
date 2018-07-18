import * as constants from '../../src/js/Bank/constants/bank';

describe('bank constants', () => {

  it('should have REMOVE_CASH_CHANGE', () => {
    expect(constants.REMOVE_CASH_CHANGE).to.be.defined;
  });

  it('should have ENTER_TOTAL', () => {
    expect(constants.ENTER_TOTAL).to.be.defined;
  });

  it('should have RATE', () => {
    expect(constants.RATE).to.be.defined;
  });
});
