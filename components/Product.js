
const React = require('react');

class Product extends React.Component{
  render(){
    return(
    <div>
    <p>Weight: {this.props.weight}</p>
    <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
    </div>
  )
  }
}

Product.propTypes={
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  color: React.PropTypes.string.isRequired,
  weight:React.PropTypes.number.isRequired,
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

    debugger
    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },

};

Product.defaultProps = {
  hasWatermark: false
};



module.exports = Product;
