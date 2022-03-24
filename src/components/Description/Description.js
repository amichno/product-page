import React from 'react';
import ReactDOM from 'react-dom';
import './description.scss';
import ButtonAdd from '../ButtonAdd/ButtonAdd';


class Description extends React.Component{
    constructor(props){
        super(props)
    }

    render()
    {
        return(
            <div className='Description'>
               <div> 
                    <h1 className='Company'>{this.props.Product[0].company}</h1>

                    <p className='Title'>{this.props.Product[0].title}</p>

                    <p className='Text'>{this.props.Product[0].text}</p>
                </div>
                <div className='Prices'>
                    <p className='AfterDiscount'>$ {(this.props.Product[0].price*0.5).toFixed(2)}     <span className='Discount'>50%</span></p>
                    <p className='BeforeDiscount'>$ {this.props.Product[0].price}</p>
                </div>              
                <ButtonAdd />
            </div>
        )
    }
}

export default Description;