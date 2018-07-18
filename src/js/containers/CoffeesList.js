import {
  connect,
} from 'react-redux';

import {
  selectCoffee,
} from '../actions/coffeeMachine';

import CoffeesList from '../components/CoffeesList';

const mapActions = {
  selectCoffee,
};

const mapStateToProps = ({ goods }) => ({
  coffees: goods.list,
});

export default connect(mapStateToProps, mapActions)(CoffeesList);
