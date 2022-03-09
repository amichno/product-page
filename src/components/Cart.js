import React from 'react';
import {chartList} from '../data/chartList';
import '../css/cart.scss';

class Chart extends React.Component{

    render(){

        if(chartList.length == 0)
            var list = <p className='Empty'>Your cart is empty</p>;
         else
            var list = chartList.map(({product, price, pcs})=>
                {
                    <li>product</li>
                })
            
        return(
            <div className='Cart'>
                <p className='Cart-title'>Cart</p>
                <ul>
                    {list}  
                </ul>       
            </div>
        )
    }
}

export default Chart;