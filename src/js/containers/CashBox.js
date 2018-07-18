import {
  connect,
} from 'react-redux';

import {
  removeCashChange,
} from '../Bank/actions/bank.js';

import CashBox from '../components/CashBox';

const mapActionsToProps = {
  takeCashChange: removeCashChange,
};

const mapStateToProps = ({ bank }) => ({
  cashChange: bank.cashChange,
});

export default connect(mapStateToProps, mapActionsToProps)(CashBox);
