import React from "react";
import './IconBasket.scss'

class IconBasket extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="OrangeBasket" style={{display:this.props.display}}>
                    
            </div>
        )
    }

}

export default IconBasket;