import React from 'react';
import {menu} from '../data/menuList'
import '../css/menu.scss'


class Menu extends React.Component{

    render()
    {
        return(
            <div className='Menu'>
                <ul className='MenuList'>
                    {menu.map((item,id) => 
                    <li className = 'MenuLi' key={id}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Menu;