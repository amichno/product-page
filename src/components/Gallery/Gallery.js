import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.scss';
import {products_photos, products_photos_thumb} from '../../data/products_photos';


const index = [1,2,3,4];

const url_image ='../../image-product-';



class Gallery extends React.Component{

    constructor(){
        super()
        this.state = {view: 1};
        this.ChangeImg = this.ChangeImg.bind(this);

    }

    ChangeImg(number){
       this.setState({view: number});
    }
    

    render()
    {
        return(
            <div className='Gal'>
                    <div className='FullsizeImg'>
                         <img className = "FullImg" src={require("../../images/image-product-"+this.state.view+".jpg")}/>
                    </div>
                    <div className='ImgWraper'>
                        {index.map((id) =>
                            <div className='Thumbnail' >
                                
                                    <img className = "Item" src={require("../../images/image-product-"+id+"-thumbnail.jpg")}
                                     onClick={()=>this.ChangeImg(id)}/>
                                 
                            </div>
                        )}                  

                    </div>                                 
            </div>
        )
    }
}

export default Gallery;