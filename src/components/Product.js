import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Product</div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: makeWeight
}

function makeWeight(props, propName) {
  let weight = props[propName];
  let validWeight = weight > 80 && weight < 300;

  if (weight === undefined) {
    return new Error("The 'weight' prop is required.")
  }
  if (isNaN(weight)) {
    return new Error("The 'weight' prop is not a number.")
  }
  if (!validWeight) {
    return new Error("Not a valid weight.")
  }
}

export default Product;
