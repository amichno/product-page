import React from "react";
import './IconBasket.scss';
import {cartList} from '../../data/cartList';

class IconBasket extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const quantity = () => {
            let sum = 0;
            cartList.map((item, id) =>
            { sum += item.quantity;
             console.log(sum);}
            )
            return sum;
        }
        return(
            <div className="OrangeBasket" style={{display:this.props.display}}>
                <p>{quantity()}</p> 
            </div>
        )
    }

}

export default IconBasket;