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
       cartList.length == 0?
       ():
       (    const search = cartList.findIndex(id => id.id === this.props.Product_id);
       console.log(search);
      // const search = list => list.id === this.props.Product_id;
       //const index =  cartList.findIndex(search);
       //console.log(index);
       //console.log(cartList[index]);
      /*cartList.push(search,{this.props.Product_id,
                    quantity: cartList[id].quantity+pcs});*/
        cartList[search] = {id: this.props.Product_id,
                            quantity: cartList[search].quantity+this.props.Quant })
       // console.log(cartList[0]);
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