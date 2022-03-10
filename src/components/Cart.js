import React from 'react';
import {cartList} from '../data/cartList';
import '../css/cart.scss';

class Cart extends React.Component{
    constructor(){
        super();
    }

    render(){

        if(cartList.length == 0)
            var list = <p className='Empty'>Your cart is empty</p>;
         else
            var list = cartList.map(({product, price, pcs})=>
                {
                    <li>product</li>
                })
            
        return(
            <div className='Cart'>
                <p className='Cart-title'>Cart</p>
                <ul>
                    {list}  
                </ul>       
            </div>
        )
    }
}

export default Cart;