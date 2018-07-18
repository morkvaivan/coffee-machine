import {
  connect,
} from 'react-redux';

import {
  triggerConnecting,
} from '../Connection/actions/connection.js';

import TurnButton from '../components/TurnButton';

const mapActions = {
  triggerConnecting,
};

const mapStateToProps = ({ connection }) => ({
  offline: connection.offline,
});

export default connect(mapStateToProps, mapActions)(TurnButton);
