const React = require('react');

class Product extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h1>{this.props.producer}</h1>
				<h1>{this.props.hasWatermark}</h1>	
				<h1>{this.props.color}</h1>	
				<h1>{this.props.weight}</h1>	
			</div>
		);
	}
}

Product.defaultProps = {
	hasWatermark :false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: (props, propName) => {
		const weight = props[propName];
		
	 	if(weight === undefined){
			return new Error('Weight is undefined');
		}	

		if(isNaN(weight)){
			return new Error('Weight is NaN');
		}

		if(weight <= 80 || weight >= 300){
			return new Error('Weight should have a value between 80 and 300');
		}
	}
}


module.exports = Product;
