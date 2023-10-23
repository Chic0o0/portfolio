import React from 'react';
import './Slides.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Box from './../Box/Box.js'

const buttonStyle = {
    background: 'none',
    border: '0px',
    padding: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"></path></g></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"></path></g></svg></button>
}

const Slides = () => (
  <div className="Slides">
    <Slide autoplay={false} {...properties}>
        <div className="EachSlide">
            <h1>Title1</h1>
            <div className='Boxes'>
                <Box
                    title={"A"}
                    img={"./../../media/image.jpg"}
                    text={"Whatever"}
                />
            </div>
        </div>
        <div className="EachSlide">
            <h1>Title2</h1>
            <div className='Boxes'>

            </div>
        </div>
        <div className="EachSlide">
            <h1>Title3</h1>
            <div className='Boxes'>

            </div>
        </div>
    </Slide>
  </div>
);

export default Slides;
