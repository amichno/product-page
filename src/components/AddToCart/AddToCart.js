import React from 'react';
import './addToCart.scss';
import {cartList} from '../../data/cartList';



class AddToCart extends React.Component{
    constructor(props){
        super(props);
        this.state ={added:0};
        this.AddToBasket = this.AddToBasket.bind(this);
    }

    AddToBasket(pcs){
        //console.log(cartList[0]);
       //console.log(this.props.Product_id);
       let search = null;
       cartList.length == 0?
       cartList.push({id:this.props.Product_id, quantity:pcs})
       :
       search = cartList.findIndex(id => id.id === this.props.Product_id);
       console.log(search);
        cartList[search] = {id: this.props.Product_id,
                            quantity: cartList[search].quantity+this.props.Quant };
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