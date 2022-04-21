import React from "react";
import './burger.scss';
import MobileMenu from "../MobileMenu/MobileMenu";

class Burger extends React.Component{
    constructor(){
        super();
        this.state = {display: '-80%'};
        this.ShowHideMobileMenu = this.ShowHideMobileMenu.bind(this);
    }

    ShowHideMobileMenu(){
       if(this.state.display === '-80%')
            this.setState({display: '-40%'})
        else 
            this.setState({display: '-80%'})
    }

    render(){
        return(
            <div className="Burger" onClick ={this.ShowHideMobileMenu}>
                <MobileMenu disp={this.state.display} onClick ={this.ShowHideMobileMenu}/>
            </div>
            
        )
    }
}

export default Burger;