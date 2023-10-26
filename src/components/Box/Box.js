import React from 'react';
import './Box.css';
import GithubLogo from './../../media/670020.png'
import WebLogo from './../../media/web.png'

//willDo add more props and styling

// const Box = ({title, time, image, text}) => (
//   <div className="Box">
//     <h2>{title}</h2>
//     <h3>{time}</h3>
//     <img src={image}/>
//     <p>{text}</p>
//   </div>
// );

// export default Box;

export default function Box({title, subtitle, time, image, text, link, link2}){
  let titleR, subtitleR, timeR, imageR, textR, linkR, link2R;

  if (typeof title !== "undefined") {
    titleR=<h2>{title}</h2>
  }
  if (typeof subtitle !== "undefined") {
    subtitleR=<h3>{subtitle}</h3>
  }
  if (typeof time !== "undefined") {
    timeR=<p>{time}</p>
  }
  if (typeof image !== "undefined") {
    imageR=<img src={image}/>
  }
  if (typeof text !== "undefined") {
    textR=<p>{text}</p>
  }
  if (typeof link !== "undefined") {
    linkR=<a href={link}><img src={GithubLogo}/></a>
  }
  if (typeof link2 !== "undefined") {
    link2R=<a href={link2}><img src={WebLogo}/></a>
  }

  return(
    <div className='Wrapper'>
      {titleR}
      {subtitleR}
      {timeR}
      {imageR}
      {textR}
      {linkR}
      {link2R}
    </div>
  )
}
