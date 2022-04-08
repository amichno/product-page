import React from "react";
import './burger.scss';
import MobileMenu from "../MobileMenu/MobileMenu";

class Burger extends React.Component{
    constructor(){
        super();
        this.state = {display: 'none'};
        this.ShowHideMobileMenu = this.ShowHideMobileMenu.bind(this);
    }

    ShowHideMobileMenu(){
       if(this.state.display === 'none')
            this.setState({display: 'flex'})
        else 
            this.setState({display: 'none'})
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