import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
	render() {
		return (
			<div>
			</div>
		)
	}
}

const colors = ["white", "eggshell-white", "salmon"]

const weightValidation = (props, propName) => {
	const value = props[propName]
	
	if (!((typeof(value) === "number") && (value >= 80) && (value <= 300))) {
		return "error"
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(colors).isRequired,
	weight: weightValidation
}

export default Product
