import React from "react";
import './empty.scss'

class Empty extends React.Component{

    render(){
        return(
            <div className='Cart' style = {{display: this.props.disp}}>
                <p className='Cart-title'>Cart</p>
                <ul>
                  <p className='Empty'>Your cart is empty</p>                    
                </ul>       
            </div>
        )
    }

}

export default Empty;