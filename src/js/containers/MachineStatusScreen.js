import {
  connect,
} from 'react-redux';

import MachineStatusScreen from '../components/MachineStatusScreen';

const mapStateToProps = ({ bank }) => ({
  total: bank.total,
});

export default connect(mapStateToProps)(MachineStatusScreen);
