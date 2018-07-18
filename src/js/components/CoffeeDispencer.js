import React, {
  PropTypes,
} from 'react';

const CoffeeDispencer = ({ coffee, takeCoffee }) => (
  <div>
    {
      coffee ?
        <div
          onClick={takeCoffee}
        >
          {coffee.name}
        </div> :
        null
    }
  </div>
);

CoffeeDispencer.propTypes = {
  coffee: PropTypes.object,
  takeCoffee: PropTypes.func.isRequired,
};

export default CoffeeDispencer;
