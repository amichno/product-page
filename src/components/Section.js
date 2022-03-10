import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery/Gallery';
import Description from './Description/Description';
import '../css/section.scss';


class Section extends React.Component{

    render()
    {
        return(
            <section>
               <Gallery />
               <Description />
            </section>
        )
    }
}

export default Section;