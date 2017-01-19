import React from 'react'
class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

Product.defaultProps ={
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: inRange
}

function inRange(props, propName, componentName){
  const value = props[propName]
  if (value === undefined)
    return new Error("weight is required")
  if (isNaN(value)|| value === undefined)
    return new Error("Must Be A Number")
  if (!(value > 80 && value < 300))
    return new Error('should be between 80 and 300')
  return null
}
module.exports = Product
