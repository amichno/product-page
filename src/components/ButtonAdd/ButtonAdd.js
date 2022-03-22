import React from "react";
import './ButtonAdd.scss';

class ButtonAdd extends React.Component{

    constructor(){
        super();
        this.state = {quantity: 0}
    }

    render(){
        return(
            <div className="AddTo">
                <button className="Plus"></button>
                <div className="Pcs">
                    {this.state.quantity}
                </div>
                <button className="Minus"></button>
                <button className="AddToCart"></button>
            </div>

        )
    }

}

export default ButtonAdd;