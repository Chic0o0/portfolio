import React from 'react';
import './Box.css';

//willDo add more props and styling

const Box = ({title, image, text}) => (
  <div className="Box">
    <h2>{title}</h2>
    <img src={image}/>
    <p>{text}</p>
  </div>
);

export default Box;

// export default function Box({title, image, text}){
//   if (typeof text === "undefined") {
//     return(
//       <div className="Box">
//         <h2>{title}</h2>
//         <img src={image}/>
//       </div>
//     )
//   } else {
//     return(
//       <div className="Box">
//         <h2>{title}</h2>
//         <img src={image}/>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }
