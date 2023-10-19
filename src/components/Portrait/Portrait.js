import React from 'react';
import './Portrait.css';
import linkedin from "./../../media/linkedin.svg"
import email from "./../../media/mail.svg"
import phone from "./../../media/phone.svg"

const Portrait = () => (
  <div className="Portrait">
    <h1>Andrés Chico</h1>
    <h2>Software developer</h2>
    <div className='iconContainer'>
      <a href='https://www.linkedin.com/in/andres-chico-gra%C3%B1a/'><img src={linkedin}/></a>
      <a href='mailto:andreschicograna@gmail.com'><img src={email}/></a>
      <a href='tel:+34717706128'><img src={phone}/></a>
    </div>
  </div>
);

export default Portrait;
