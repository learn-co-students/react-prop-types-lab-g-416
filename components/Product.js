import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <h2>Name: {this.props.name}</h2>
      <h2>Producer: {this.props.producer ? <small>{this.props.producer}</small> : null }</h2>
      <h4>Watermark: {this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</h4>
      <h4>Weight: {this.props.weight}</h4>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight <300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};

module.exports = Product;
