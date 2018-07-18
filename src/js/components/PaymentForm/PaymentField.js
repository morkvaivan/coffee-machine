import React, {
  PropTypes,
} from 'react';

const PaymentField = ({ onBlur, labelContent }) => (
  <div>
    <label>{labelContent}</label>
    <input
      onBlur={event => onBlur(Number(event.target.value))}
      type="text"
    />
  </div>
);

PaymentField.propTypes = {
  labelContent: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default PaymentField;
