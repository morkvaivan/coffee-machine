import React, {
  PropTypes,
} from 'react';

import PaymentField from './PaymentField';

const PaymentForm = ({ payCash }) => (
  <div>
    <PaymentField
      labelContent="Enter 25, 50, 75 cents:"
      onBlur={payCash}
    />
  </div>
);

PaymentForm.propTypes = {
  payCash: PropTypes.func.isRequired,
};

export default PaymentForm;
