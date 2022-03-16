import React from "react";
import './LightBox.scss';

class LightBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: 'none'};
    }


    render(){
        return(
            <div className="LB">
                <div className="Wraper">

                </div>
            </div>
        )
    }

}

export default LightBox;