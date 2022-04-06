import React from "react";
import './IconBasket.scss';
import {cartList} from '../../data/cartList';

class IconBasket extends React.Component{

    constructor(props){
        super(props);
        this.state = {checkLength: cartList.length}
    }



    render(){
        const quantity = () => {
            let sum = 0;
            cartList.map((item) =>
            { sum += item.quantity;})
            return sum;
        }
        
        //const hide = this.props.hideOrangeIcon;
        if(quantity() > 0){
            console.log(">0 "+this.state.checkLength);
            return(
                <div className="OrangeBasket" style={{display:this.props.display}}>
                    <p>{quantity()}</p> 
                </div>
            )}
            else
            {     
                     
                return( 
                         <div onMouseOver={()=> this.props.hideOrangeIcon}></div>
                    )
            }
    }

}

export default IconBasket;