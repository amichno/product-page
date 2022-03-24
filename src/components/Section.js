import React from 'react';
import Gallery from './Gallery/Gallery';
import Description from './Description/Description';
import '../css/section.scss';
import {product} from '../data/product';


class Section extends React.Component{

    render()
    {
        return(
            <section>
               <Gallery />
               <Description Product = {product}/>
            </section>
        )
    }
}

export default Section;