import React from "react";
import './deleteButton.scss';

class DeleteButton extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <div className='Delete' {...this.props}> 
            
            </div>
        )
    }
}

export default DeleteButton;