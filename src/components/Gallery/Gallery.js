import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.scss';
import {products_photos, products_photos_thumb} from '../../data/products_photos';


const index = [1,2,3,4];
const id = 1;
const url_image ='../../images-product-';



class Gallery extends React.Component{

    constructor(){
        super()
    }
    

    render()
    {
        return(
            <div className='Gal'>
                
                    {products_photos_thumb.map((img) =>
                        <div>
                            
                            <img src={require("../../images/image-product-"+id+"-thumbnail.jpg")}/>

                        </div>
                    )}                  
                                     
                        
                   
              
            </div>
        )
    }
}

export default Gallery;