import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.scss';
import {products_photos, products_photos_thumb} from '../../data/products_photos';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";




class Gallery extends React.Component{

    render()
    {
        return(
            <div className='Gal'>
                
                     <div>
                        
                                     <img src="../../images/image-product-1-thumbnail.jpg" />
                        
                    </div>
              
            </div>
        )
    }
}

export default Gallery;