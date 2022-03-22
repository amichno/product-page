import React from 'react';
import ReactDOM from 'react-dom';
import './addToCart.scss';


class AddToCart extends React.Component{

    render()
    {
        return(
            <div className='AddToCart'>
                <button className="ButtonAddToCart">
                    <img src = '../../images/icon-cart.svg'></img>
                    <span>Add to cart</span> 
                </button>
            </div>
        )
    }
}

export default AddToCart;