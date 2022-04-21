import React from "react";
import '../../data/menuList';
import { menu } from "../../data/menuList";
import './mobilemenu.scss';

class MobileMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="MobileMenu" style={{left: this.props.disp}}>
                <div className="CloseMenu" >
                </div>
                <ul className="MobileList">
                {menu.map((item, id) =>
                    <li key={id}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default MobileMenu;