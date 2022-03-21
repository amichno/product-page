import React from "react";

class ButtonAdd extends React.Component{

    render(){
        return(
            <div className="AddTo">
                <button className="Plus"></button>
                <div>
                    0
                </div>
                <button className="Minus"></button>
                <button className="AddToCart"></button>
            </div>

        )
    }

}

export default ButtonAdd;