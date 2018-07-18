import * as constants from '../../src/js/Connection/constants/connection';

describe('bank constants', () => {
  it('should have TRIGGER_CONNECTION', () => {
    expect(constants.TRIGGER_CONNECTION).to.be.defined;
  });
});
