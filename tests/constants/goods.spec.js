import * as constants from '../../src/js/Goods/constants/goods';

describe('bank constants', () => {
  it('should have SELECT_GOOD', () => {
    expect(constants.SELECT_GOOD).to.be.defined;
  });

  it('should have DESELECT_GOOD', () => {
    expect(constants.DESELECT_GOOD).to.be.defined;
  });

  it('should have SET_GOODS', () => {
    expect(constants.SET_GOODS).to.be.defined;
  });

  it('should have array goods', () => {
    expect(constants.goods).to.be.a('array');
  });
});
