const React = require('react');
const PropTypes = require('prop-types');
class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>Product Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: function(props, propName, componentName) {
  //   if(typeof props[propName] !== 'number' ) {
  //      return new Error ('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
  //   } else if (props[propName] < 80 || props[propName] > 300) {
  //      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
  //   }
  // }
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
};
module.exports = Product;
