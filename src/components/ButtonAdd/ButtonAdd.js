import React from "react";
import './ButtonAdd.scss';

class ButtonAdd extends React.Component{

    render(){
        return(
            <div className="AddTo">
                <button className="Plus"></button>
                <div className="Pcs">
                    0
                </div>
                <button className="Minus"></button>
                <button className="AddToCart"></button>
            </div>

        )
    }

}

export default ButtonAdd;