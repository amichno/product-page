import React from "react";
import './ButtonAdd.scss';
import AddToCart from "../AddToCart/AddToCart";

class ButtonAdd extends React.Component{

    constructor(){
        super();
        this.state = {quantity: 0};
    }

    ChangeQuantity(plus_or_minus){
        if(this.state.quantity >= 0){
           if( plus_or_minus == "+")
                this.setState({quantity:(this.state.quantity += 1)})
            else if (plus_or_minus == "-" && this.state.quantity > 0)
                this.setState({quantity:(this.state.quantity -= 1)})
            }
    }
    

    render(){
        return(
            <div className="AddTo">
                <button className="Plus" onClick={()=> this.ChangeQuantity("+")}></button>
                <div className="Pcs">
                    {this.state.quantity}
                </div>
                <button className="Minus" onClick={()=> this.ChangeQuantity("-")}></button>
                <AddToCart />
            </div>

        )
    }

}

export default ButtonAdd;