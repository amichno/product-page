import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/icons.scss';
import Cart from './Cart';


class Icons extends React.Component{
    constructor(){
        super()
        this.state = {display: 'none'}
        this.ToggleCart = this.ToggleCart.bind(this);
        
    }

   ToggleCart(){

       if(this.state.display == 'none')
            this.setState({display: 'flex'}); 
        else    
            this.setState({display: 'none'});
      //alert(this.state.display);
    }

    render()
    {
        return(
            <div className='Icons'>
                <button className='Chart-icon' onClick={this.ToggleCart} >  
                <Cart />  
                </button>
               
                <div className='Avatar'>       
                </div> 
            </div>
           
        )
    }
}

export default Icons;