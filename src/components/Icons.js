import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/icons.scss';
import Cart from './Cart';


class Icons extends React.Component{
    constructor(){
        super()
        
    }

   ToggleCart(){
       alert("ok");
    }

    render()
    {
        return(
            <div className='Icons'>
                <button className='Chart-icon' onClick={this.ToggleCart} >    
                </button>
                <Cart />
                <div className='Avatar'>       
                </div> 
            </div>
           
        )
    }
}

export default Icons;