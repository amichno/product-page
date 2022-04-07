import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/Logo';
import Menu from './Menu';
import Icons from './Icons';
import Burger from './Burger/Burger';
import '../css/header.scss'


class Header extends React.Component{

    render()
    {
        return(
            <header>
                <Burger />
                <Logo />
                <Menu />
                <Icons />
            </header>
        )
    }
}

export default Header;