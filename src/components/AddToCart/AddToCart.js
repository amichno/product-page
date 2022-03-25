import React from 'react';
import ReactDOM from 'react-dom';
import './addToCart.scss';
import {cartList} from '../../data/cartList';



class AddToCart extends React.Component{
    constructor(props){
        super(props);
        this.state ={added:0};
        this.AddToBasket = this.AddToBasket.bind(this);
    }

    AddToBasket(pcs){
      cartList.push({id: this.props.Product_id,
                    quantity: pcs});
      console.log(cartList);

    }

    render()
    {
        return(
            <div className='AddToCart'>
                <button className="ButtonAddToCart" onClick={()=>this.AddToBasket(this.props.Quant) }>
                    <img src = '../../images/icon-cart.svg'></img>
                    <span>Add to cart</span> 
                </button>
            </div>
        )
    }
}

export default AddToCart;