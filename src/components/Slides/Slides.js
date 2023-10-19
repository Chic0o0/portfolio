import React from 'react';
import './Slides.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slides = () => (
  <div className="Slides">
    <Slide autoplay={false}>
            <div className="each-slide-effect">
                <div>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
  </div>
);

export default Slides;
