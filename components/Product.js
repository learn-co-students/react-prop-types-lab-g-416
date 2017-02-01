const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <ul className="product">
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark.toString}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell white', 'salmon']).isRequired,
  weight: function(props, propName, component) {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('No weight given');
    }

    if (isNaN(weight)) {
      return new Error('Weight must be a number');
    }

    const inRange = weight > 80 && weight < 300;

    if (!inRange) {
      return new Error('Weight must be between 80 and 300');
    }
  }
};

module.exports = Product;
