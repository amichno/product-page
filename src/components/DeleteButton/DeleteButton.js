import React from "react";
import './deleteButton.scss';

class DeleteButton extends React.Component{


    render(){
        return(
            <div className='Delete'> 
            {console.log(this.props.Product_id)}
            </div>
        )
    }
}

export default DeleteButton;