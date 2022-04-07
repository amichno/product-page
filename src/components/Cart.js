import React from 'react';
import {cartList} from '../data/cartList';
import '../css/cart.scss';
import ShowTinyBasket from './ShowTinyBasket/ShowTinyBasket';
import Empty from './Empty/Empty';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {empty:'true'}
        this.emptyBasket = this.emptyBasket.bind(this);
   }

   emptyBasket(){
       this.setState({empty: 'true'});
       console.log('empty');
   }
   
   notEmptyBasket(){
       this.setState({empty: 'false'});
   }

    render(){
        if (cartList.length === 0)
        return(
            <Empty disp={this.props.disp} />
        )
        else
            return (
                <div className='Cart' style = {{display: this.props.disp}}>
                      <p className='Cart-title'>Cart</p>
                      <ShowTinyBasket isEmpty={this.state.empty} changeempty={()=>this.emptyBasket} />
                </div>
            )
    }
}

export default Cart;