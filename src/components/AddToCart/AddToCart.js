import React from 'react';
import './addToCart.scss';
import {cartList} from '../../data/cartList';



class AddToCart extends React.Component{
    constructor(props){
        super(props);
        this.state ={added:this.props.Quant};
        this.AddToBasket = this.AddToBasket.bind(this);
    }

    AddToBasket(pcs){
       let search = null;
       if(cartList.length == 0) 
             cartList.push({id:this.props.Product_id, quantity:pcs})
        else
        {
            search = cartList.findIndex(id => id.id === this.props.Product_id);
            cartList[search] = {id: this.props.Product_id,
                                quantity: cartList[search].quantity+this.props.Quant };
         }  
       console.log(this.props.orangeIcon);
       this.props.showOrangeIcon();
       console.log(this.props.orangeIcon);

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