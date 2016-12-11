const React = require('react')

class Product extends React.component {

  render(){

  return (
    <div className="product">
      <h3>{this.props.name}</h3>
      <h3>{this.props.producer}</h3>
      <h3>{this.props.hasWatermark}</h3>
      <h3>{this.props.color}</h3>
      <h3>{this.props.weight}</h3>


    </div>
  )}

}

Product.defaultProps = {
  hasWatermark: false
}


Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props,propName) => {
    let value = props[propName]
    if (value > 300){
      return new Error("Weight is too big")
    }
    if (value < 80){
      return new Error("Weight is too small")
    }
    if (NaN(value)){
      return new Error("Weight is not a number")
    }
    else{
      return null
    }
  }
}


module.exports = Product;
