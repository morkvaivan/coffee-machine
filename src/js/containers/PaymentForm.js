import {
  connect,
} from 'react-redux';

import {
  enterTotal,
} from '../Bank/actions/bank';

import PaymentForm from '../components/PaymentForm/PaymentForm';

const mapActionsToProps = {
  payCash: enterTotal,
};

export default connect(null, mapActionsToProps)(PaymentForm);
