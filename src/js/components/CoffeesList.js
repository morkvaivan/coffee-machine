import React, {
  PropTypes,
} from 'react';

const CoffeesList = ({ coffees, selectCoffee }) => (
  <div>
    {
      coffees.map(
        (coffee) => (
          <div key={coffee.name}>
            {coffee.name}
            <button
              onClick={() => selectCoffee(coffee)}
            >
              ${coffee.price}
            </button>
          </div>
        )
      )
    }
  </div>
);

CoffeesList.propTypes = {
  coffees: PropTypes.array.isRequired,
  selectCoffee: PropTypes.func.isRequired,
};

export default CoffeesList;
