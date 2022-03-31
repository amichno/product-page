import React from 'react';
import {cartList} from '../data/cartList';
import '../css/cart.scss';
import ShowTinyBasket from './ShowTinyBasket/ShowTinyBasket';
import Empty from './Empty/Empty';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {cartLength: false};
        this.updateValue = this.updateValue.bind(this);
   }

   updateValue(value){
      //this.setState({changed: value});
       console.log(this.state.cartLength);
       /*if(this.state.changed == 'false')
          this.setState({changed: 'true'}); 
            else    
         this.setState({changed: 'false'});*/
        // this.setState({cartLength: value});
        this.setState(prevState => ({
            cartLength: !prevState.cartLength
          }))
        console.log(this.state.cartLength);
   }

    render(){
        if (cartList.length == 0)
        return(
            <Empty disp={this.props.disp} />
        )
        else
            return (
                <div className='Cart' style = {{display: this.props.disp}}>
                      <p className='Cart-title'>Cart</p>
                      <ShowTinyBasket  updateValue={()=>this.updateValue()}/>
                </div>
            )
    }
}

export default Cart;