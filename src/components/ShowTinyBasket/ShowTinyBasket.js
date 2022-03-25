import React from "react";
import {cartList} from '../../data/cartList';
import { product } from "../../data/product";
import './showTinyBasket.scss';

class ShowTinyBasket extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='NotEmpty'>
               {cartList.map(({id, quantity}) =>
                     
                        //console.log(id);
                        //console.log(quantity);
                        //<p>cokolwiek</p>
                        <div className='ItemInBasket'>
                            <div className='BasketThumbNail'><img className="BasketPhoto" src={product[0].photo} />
                            </div>
                            <div className='BasketText'> 
                                <p>{product[id].title}</p>
                                <p>{product[id].price} X {quantity}</p>
                                
                            </div>
                            <div className='Delete'> 
                            </div>
                        </div>
                )}
            </div>
        )
    }

}

export default ShowTinyBasket;