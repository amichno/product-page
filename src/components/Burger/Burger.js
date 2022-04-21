import React from "react";
import './burger.scss';
import MobileMenu from "../MobileMenu/MobileMenu";

class Burger extends React.Component{
    constructor(){
        super();
        this.state = {display: 'hidden'};
        this.ShowHideMobileMenu = this.ShowHideMobileMenu.bind(this);
    }

    ShowHideMobileMenu(){
       if(this.state.display === 'hidden')
            this.setState({display: 'visible'})
        else 
            this.setState({display: 'hidden'})
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