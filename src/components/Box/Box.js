import React from 'react';
import './Box.css';

const Box = ({title, image, text}) => (
  <div className="Box">
    <h1>{title}</h1>
    <img src={image}/>
    <p>{text}</p>
  </div>
);

export default Box;
