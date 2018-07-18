import {
  connect,
} from 'react-redux';

import {
  deselectGood,
} from '../Goods/actions/goods.js';

import CoffeeDispencer from '../components/CoffeeDispencer';

const mapActionsToProps = {
  takeCoffee: deselectGood,
};

const mapStateToProps = ({ goods }) => ({
  coffee: goods.selectedGood,
});

export default connect(mapStateToProps, mapActionsToProps)(CoffeeDispencer);
