import React from 'react';
import ReactDOM from 'react-dom';
import './description.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';


class Description extends React.Component{

    render()
    {
        return(
            <div className='Description'>
               <div> 
                    <h1 className='Company'>Sneaker Company</h1>

                    <p className='Title'>Fall Limited Edition Sneakers</p>

                    <p className='Text'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                <div className='Prices'>
                    <p class="AfterDiscount">$125.00     <span className='Discount'>50%</span></p>
                    <p className='BeforeDiscount'>$250.00</p>
                </div>              
                <ButtonAdd />
            </div>
        )
    }
}

export default Description;