import React from "react";
import './ButtonAdd.scss';
import AddToCart from "../AddToCart/AddToCart";
import IconBasket from "../IconBasket/IconBasket";


class ButtonAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {quantity: 0,
                     showOrangeIcon: 'none'};
        this.ShowOrangeIcon = this.ShowOrangeIcon.bind(this);
    }

    ChangeQuantity(plus_or_minus){
        if(this.state.quantity >= 0){
           if( plus_or_minus == "+")
                this.setState({quantity:(this.state.quantity += 1)})
            else if (plus_or_minus == "-" && this.state.quantity > 0)
                this.setState({quantity:(this.state.quantity -= 1)})
            }
        if(this.state.showOrangeIcon === "true")
            alert("koszyczek");
    }

    ShowOrangeIcon(){
       // alert('ok')
        this.setState({showOrangeIcon: 'flex'});
    }

   
    

    render(){
        return(
            <div className="AddTo">
                <button className="Plus" onClick={()=> this.ChangeQuantity("+")}></button>
                <div className="Pcs">
                    {this.state.quantity}
                </div>
                <button className="Minus" onClick={()=> this.ChangeQuantity("-")}></button>
                <AddToCart Quant={this.state.quantity} Product_id={0} 
                            orangeIcon={this.state.showOrangeIcon} showOrangeIcon={()=>this.ShowOrangeIcon()}/>
                <IconBasket display={this.state.showOrangeIcon}/>
            </div>

        )
    }

}

export default ButtonAdd;