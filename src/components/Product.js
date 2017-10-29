// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div>
      </div>
    );
  }

}

Product.defaultProps = {
  hasWatermark: false
};

let numberRequiredWithinRange = (props, propName, min, max) => {
  let value = props[propName];
  if (typeof value === 'number' && !isNaN(value) && value >= min && value <= max) {
    return null;
  } else {
    console.error(`${propName} must be a number between ${min} and ${max}.`);
    return new Error(`${propName} must be a number between ${min} and ${max}.`);
  }
};

let numberRequiredBetween80And300 = (props, propName, componentName) => {
  return numberRequiredWithinRange(props, propName, 80, 300);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: numberRequiredBetween80And300
};
