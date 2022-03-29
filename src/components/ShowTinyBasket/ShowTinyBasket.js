import React from "react";
import {cartList} from '../../data/cartList';
import { product } from "../../data/product";
import './showTinyBasket.scss';

class ShowTinyBasket extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='NotEmpty'>
               {cartList.map(({id, quantity}) =>
                        <div className='ItemInBasket' key={id}>
                            <div className='BasketThumbNail'><img className="BasketPhoto" src={product[0].photo} />
                            </div>
                            <div className='BasketText'> 
                                <p>{product[id].title}</p>
                                <p>${product[id].price} x {quantity} <span className="BasketSum">${(product[id].price*quantity).toFixed(2)}</span></p>
                            </div>
                            <div className='Delete'> 
                            </div>
                        </div>
                )}
                <div className='BC'>
                 <button className='ButtonCheckout'>Checkout</button>
                </div>
            </div>
        )
    }

}

export default ShowTinyBasket;