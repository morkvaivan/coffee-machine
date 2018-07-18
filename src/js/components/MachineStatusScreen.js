import React, {
  PropTypes,
} from 'react';

const MachineStatusScreen = ({ workingStatus, total }) => (
  <div>
    {workingStatus}
    <br />
    Total: ${total}
  </div>
);

MachineStatusScreen.propTypes = {
  workingStatus: PropTypes.string,
  total: PropTypes.number.isRequired,
};

export default MachineStatusScreen;
