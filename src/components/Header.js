import React from 'react';
import ReactDOM from 'react-dom';
import {menuList}  from '../data/menu';


class Header extends React.Component{

    render()
    {
        return(
            <header>
                <h1>{menuList[1]}</h1>
            </header>
        )
    }
}

export default Header;