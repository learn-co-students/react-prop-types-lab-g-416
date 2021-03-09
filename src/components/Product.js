// Code Product Component Here
import React from "react";
import PropTypes from 'prop-types';


let color=["white",'eggshell-white',"salmon"]

class Product extends React.Component{
    render (){

        const {name, producer, hasWatermark, color, weight}=this.props;
        return (
            <div>
               <h1></h1> 
            </div>
        )
    }
}

Product.defaultProps={
hasWatermark: false,
color: color
};

Product.propTypes={
name: PropTypes.string.isRequired,
producer: PropTypes.string,
hasWatermark: PropTypes.boolean,
color: PropTypes.string.isRequired,
weight: PropTypes.number.isRequired
};



export default Product;