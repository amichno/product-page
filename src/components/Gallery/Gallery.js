import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.scss';
import {products_photos, products_photos_thumb} from '../../data/products_photos';


const index = [1,2,3,4];

const url_image ='../../image-product-';



class Gallery extends React.Component{

    constructor(){
        super()
        this.state = {prev : 4};
        this.state = {view: 1};
        //this.state = {next: 2};
        this.ChangeImg = this.ChangeImg.bind(this);

    }

    ChangeImg(id){

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
                            <div className='Thumbnail'>
                                <img className = "Item" src={require("../../images/image-product-"+id+"-thumbnail.jpg")}/>

                            </div>
                        )}                  

                    </div>             
                        
                   
              
            </div>
        )
    }
}

export default Gallery;