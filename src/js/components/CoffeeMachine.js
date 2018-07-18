import React from 'react';

import CoffeeList from '../containers/CoffeesList';
import MachineStatusScreen from '../containers/MachineStatusScreen';
import PaymentForm from '../containers/PaymentForm';
import CoffeeDispencer from '../containers/CoffeeDispencer';
import CashBox from '../containers/CashBox';
import TurnButton from '../containers/TurnButton';

const App = () => (
  <div>
    <TurnButton />
    <hr />
    <PaymentForm />
    <hr />
    <CashBox />
    <hr />
    <MachineStatusScreen />
    <hr />
    <CoffeeList />
    <hr />
    <CoffeeDispencer />
  </div>
);

export default App;
