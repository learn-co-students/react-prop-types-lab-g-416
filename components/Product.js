const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Waterwarked" : "Not watermarked"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div> 
    );
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
  weight: function(props, propName, Product) {
   if(props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid number');
   }
   if(props[propName] === undefined) {
      return new Error('Weight is required');
   }
   if(isNaN(props[propName])) {
      return new Error('Weight must be a number');
   }
}
}

module.exports = Product;