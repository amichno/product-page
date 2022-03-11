import React from 'react';
import ReactDOM from 'react-dom';
import './description.scss';


class Description extends React.Component{

    render()
    {
        return(
            <div className='Dis'>
                Sneaker Company

                Fall Limited Edition Sneakers

                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.

                $125.00
                50%
                $250.00

                0
                Add to cart
            </div>
        )
    }
}

export default Description;