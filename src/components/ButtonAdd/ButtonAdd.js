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
        this.HideOrangeIcon = this.HideOrangeIcon.bind(this);
    }

    ChangeQuantity(plus_or_minus){
        if(this.state.quantity >= 0){
           if( plus_or_minus == "+")
                this.setState({quantity:(this.state.quantity += 1)})
            else if (plus_or_minus == "-" && this.state.quantity > 0)
                this.setState({quantity:(this.state.quantity -= 1)})
            }
    }

    ShowOrangeIcon(){
        this.setState({showOrangeIcon: 'flex'});
        console.log('show');
    }

   HideOrangeIcon(){
    console.log('hide');
    this.setState({showOrangeIcon: 'none'});
    console.log(this.state.showOrangeIcon);
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
                                orangeIcon={this.state.showOrangeIcon} showOrangeIcon={()=>this.ShowOrangeIcon()}
                                />
                <IconBasket display={this.state.showOrangeIcon} hideOrangeIcon ={()=>this.HideOrangeIcon()}/>
                    
                </div>

        )
    }

}

export default ButtonAdd;