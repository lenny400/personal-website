import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slides from '../data/slides.json';


export default function Slideshow() {
    
    return (
        <div className="center-container">
            <div className="slideshow-container">    
                <Slide>
                    {slides.map((slide, index) => (
                        <div className="each-slide-effect" key={index}>
                            <img className="slide-image" src={slide.imgSrc} alt={slide.alt}/>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}