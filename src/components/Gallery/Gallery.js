import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.scss';

const index = [1,2,3,4];
const url_image ="../../images/image-product-";


class Gallery extends React.Component{

    constructor(){
        super()
        this.state = {view: 1,
                     displayLB: 'none'};
        this.ChangeImg = this.ChangeImg.bind(this);
    }

    ChangeImg(number, visibility){
       this.setState({view: number});
       this.setState({displayLB: visibility});
    }
    

    render()
    {
        return(
            <div className='Gal'>
                    <div className='FullsizeImg' >
                         <img className = "FullImg" src={require("../../images/image-product-"+this.state.view+".jpg")} 
                              onClick= {()=>this.ChangeImg(this.state.view,'flex')}/>
                                 <div className='GalLB' style={{display:this.state.displayLB}}>
                                    <div className='FullsizeImg LB' >
                                        <img className = "FullImg LB" src={require("../../images/image-product-"+this.state.view+".jpg")} 
                                        onClick= {()=>this.ChangeImg(this.state.view,'none')}/>
                                    </div>
                                    <div className='ImgWraper LB'>
                                        {index.map((id) =>
                                            <div className='Thumbnail Lb' >                                
                                                    <img className = "Item" src={require("../../images/image-product-"+id+"-thumbnail.jpg")}
                                                    onClick={()=>this.ChangeImg(id, 'flex')}/>
                                            </div>
                                        )}                  

                                   </div>                                 
                                </div>
                    </div>
                    <div className='ImgWraper'>
                        {index.map((id) =>
                            <div className='Thumbnail' >                                
                                    <img className = "Item" src={require("../../images/image-product-"+id+"-thumbnail.jpg")}
                                     onClick={()=>this.ChangeImg(id, 'none')}/>
                            </div>
                        )}                  

                    </div>                                 
                
            </div>
        )
    }
}

export default Gallery;