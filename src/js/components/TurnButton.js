import React, {
  PropTypes,
} from 'react';

const TurnButton = ({ triggerConnecting, offline }) => (
  <div className="toggle">
    <input
      type="checkbox"
      onChange={triggerConnecting}
      checked={offline}
    />
  </div>
);

TurnButton.propTypes = {
  offline: PropTypes.bool.isRequired,
  triggerConnecting: PropTypes.func.isRequired,
};

export default TurnButton;
