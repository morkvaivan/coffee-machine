import React, { PropTypes } from 'react';

const App = ({ increment, count, staticValue }) => (
  <div>
    Count: {count}. StaticValue: {staticValue}. <button onClick={increment}>increment</button>
  </div>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  staticValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default App;
