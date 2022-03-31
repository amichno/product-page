import React from "react";
import {cartList} from '../../data/cartList';
import { product } from "../../data/product";
import './showTinyBasket.scss';
import DeleteButton from "../DeleteButton/DeleteButton";
import Empty from "../Empty/Empty";

class ShowTinyBasket extends React.Component{
    constructor(props){
        super(props)
        this.state = {list:cartList};
        this.DeleteItem = this.DeleteItem.bind(this);
    }

    DeleteItem(id){
        const newList = this.state.list.filter(list => list.id != id);
        this.setState({list:newList});
        cartList.pop();
        //this.props.updateValue(true);
    }  

    render(){
               // if(this.state.list.length > 0)
                return(
                    <div className='NotEmpty'>
                    {this.state.list.map(({id, quantity}) =>
                                <div className='ItemInBasket' key={id}>
                                    <div className='BasketThumbNail'><img className="BasketPhoto" src={product[0].photo} />
                                    </div>
                                    <div className='BasketText'> 
                                        <p>{product[id].title}</p>
                                        <p>${product[id].price} x {quantity} <span className="BasketSum">${(product[id].price*quantity).toFixed(2)}</span></p>
                                    </div>
                                    <DeleteButton product_id = {id} onClick={()=>this.DeleteItem(id)}/>
                                </div>
                        )}
                        <div className='BC'>
                            <button className='ButtonCheckout'>Checkout</button>
                        </div>
                    </div>)
                 /* else
                   return (<ul>
                    <p className='Empty'>Your cart is empty</p>                    
                  </ul>  ) */
                     
        
    }

}

export default ShowTinyBasket;