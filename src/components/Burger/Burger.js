import React from "react";
import './burger.scss';

class Burger extends React.Component{
    constructor(){
        super();
        this.state = {display: 'none'};
        this.ShowHideMobileMenu = this.ShowHideMobileMenu.bind(this);
    }

    ShowHideMobileMenu(){
        console.log('show hide');
    }

    render(){
        return(
            <div className="Burger" onClick ={this.ShowHideMobileMenu}>
            </div>
        )
    }
}

export default Burger;