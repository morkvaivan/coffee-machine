import React, {
  PropTypes,
} from 'react';

const CashBox = ({ cashChange, takeCashChange }) => (
  <div>
    {
      cashChange > 0 ?
        <div
          onClick={takeCashChange}
        >
          {cashChange}
        </div> :
        null
    }
  </div>
);

CashBox.propTypes = {
  cashChange: PropTypes.number.isRequired,
  takeCashChange: PropTypes.func.isRequired,
};

export default CashBox;
