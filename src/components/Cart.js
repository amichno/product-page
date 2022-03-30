import React from 'react';
import {cartList} from '../data/cartList';
import '../css/cart.scss';
import ShowTinyBasket from './ShowTinyBasket/ShowTinyBasket';

class Cart extends React.Component{
    constructor(props){
        super(props);
        
   }

    render(){
        if (cartList.length == 0)
        return(
            <div className='Cart' style = {{display: this.props.disp}}>
                <p className='Cart-title'>Cart</p>
                <ul>
                  <p className='Empty'>Your cart is empty</p>                    
                </ul>       
            </div>
        )
        else
            return (
                <div className='Cart' style = {{display: this.props.disp}}>
                      <p className='Cart-title'>Cart</p>
                      <ShowTinyBasket />
                </div>
            )
    }
}

export default Cart;