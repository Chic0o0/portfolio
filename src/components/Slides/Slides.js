import React from 'react';
import './Slides.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Box from './../Box/Box.js'
import Solera from './../../media/solera-logo-icon.svg'
import ICAO from './../../media/Icaoviedo.jpg'
import ASN from './../../media/asn.png'
import UP from './../../media/upintelligence_logo.jpg'
import Flemming from './../../media/flemming.jpg'
import CIDEAD from './../../media/at-sign.svg'
import Leon from './../../media/Leon.png'
import Google from './../../media/Google.jpg'
import Cambridge from './../../media/Cambridge.jpg'
import Trio from './../../media/triada.jpg'
import PHP from './../../media/php.png'
import SQL from './../../media/sql.png'
import Git from './../../media/Git-Icon-1788C.png'
import ReactLogo from './../../media/React-icon.svg.png'
import Laravel from './../../media/laravel.png'
import Java from './../../media/java_original_logo_icon_146458.png'
import Spring from './../../media/Spring.png'
import Python from './../../media/Python-logo-notext.svg.png'
import Pandas from './../../media/pandas.png'

const buttonStyle = {
    background: 'none',
    border: '0px',
    padding: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"></path></g></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"></path></g></svg></button>
}

const Slides = () => (
  <div className="Slides">
    <Slide autoplay={false} canSwipe={false} {...properties}>
        <div className="EachSlide">
            <h1>Experience</h1>
            <div className='Boxes'>
                <Box
                    title={"UpIntelligence"}
                    subtitle={"Internship"}
                    time="06/2021 - 08/2021"
                    image={UP}
                />
                <Box
                    title={"Art Science Node"}
                    subtitle={"Internship"}
                    time="05/2022 - 07/2022"
                    image={ASN}
                />
                <Box
                    title={"Solera"}
                    subtitle={"Bootcamp"}
                    time="10/2022 - 12/2022"
                    image={Solera}
                />
                <Box
                    title={"Colegio de Abogados de Oviedo"}
                    subtitle={"Substitution"}
                    time="05/2023 - 07/2023"
                    image={ICAO}
                />
            </div>
        </div>
        <div className="EachSlide">
            <h1>Projects</h1>
            <div className='Boxes'>
                <Box
                        title={"BaseProjectPHP + Pixelart"}
                        subtitle={"Solo"}
                        text="Project harcoded in PHP, inline styling, some js"
                        link={"https://github.com/Chic0o0/proyectoBasePHP"}
                />
                <Box
                        title={"findUrPro"}
                        subtitle={"Solo"}
                        text="Angular + Laravel, HTTP raw connections"
                        link={"https://github.com/Chic0o0/findUrPro"}
                />
                <Box
                        title={"ASN roots page"}
                        subtitle={"Duo"}
                        text="Interactive webpage in Wordpress alongside designer Weronika Michalska"
                        link2={"https://artscience-node.com/ourbiotechplanet-future-of-plants-and-humans/"}
                />
            </div>
        </div>
        <div className="EachSlide">
            <h1>Skills</h1>
            <div className='Boxes'>
                <Box
                    title={"HTML + CSS + JS"}
                    subtitle={"Intermediate"}
                    time={"2-3 years"}
                    image={Trio}
                />
                <Box
                    title={"PHP"}
                    subtitle={"Intermediate"}
                    time={"2 years"}
                    image={PHP}
                />
                <Box
                    title={"SQL"}
                    subtitle={"Intermediate"}
                    time={"2-3 years"}
                    image={SQL}
                />
                <Box
                    title={"Git"}
                    subtitle={"Intermediate"}
                    time={"2 years"}
                    image={Git}
                />
                <Box
                    title={"React, Angular, Vue"}
                    subtitle={"Beginner"}
                    time={"2 years"}
                    image={ReactLogo}
                />
                <Box
                    title={"Laravel"}
                    subtitle={"Beginner"}
                    time={"2 years"}
                    image={Laravel}
                />
                <Box
                    title={"Java"}
                    subtitle={"Beginner"}
                    time={"2-3 years"}
                    image={Java}
                />
                <Box
                    title={"Spring"}
                    subtitle={"Beginner"}
                    time={"1 year"}
                    image={Spring}
                />
                <Box
                    title={"Python"}
                    subtitle={"Beginner"}
                    time={"1 year"}
                    image={Python}
                />
                <Box
                    title={"Pandas"}
                    subtitle={"Beginner"}
                    time={"1 year"}
                    image={Pandas}
                />
            </div>
        </div>
        <div className="EachSlide">
            <h1>Education</h1>
            <div className='Boxes'>
                <Box
                    title={"CFGS - Web Development"}
                    subtitle={"IES Flemming"}
                    time="2020 - 2022"
                    image={Flemming}
                />
                <Box
                    title={"AI & Big Data Specialization"}
                    subtitle={"CIDEAD"}
                    time="10/2022 - 04/2023"
                    image={CIDEAD}
                />
                <Box
                    title={"Google IT automation with Python"}
                    subtitle={"Google"}
                    time="11/2022 - 03/2023"
                    image={Google}
                />
                <Box
                    title={"Cambridge B2 Certificate"}
                    subtitle={"Cambridge"}
                    time="06/2019"
                    image={Cambridge}
                />
                <Box
                    title={"Ciencias de la Actividad Física y el Deporte"}
                    subtitle={"University of León"}
                    time="09/2019 - 05/2020"
                    image={Leon}
                />
            </div>
        </div>
    </Slide>
  </div>
);

export default Slides;
