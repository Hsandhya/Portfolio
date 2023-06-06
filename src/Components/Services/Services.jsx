import React from 'react'
import './Services.css'
import Glass from '../../img/glasses.png'
import Heart from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Cards from '../Cards/Cards'
import resume from './Resume_2023.pdf'
import back2 from '../../img/back2.png'


const Services = () => {
  return (
    <div className='services' id='service'>
      <div className="back2">
         <img src={back2} alt="" />
      </div>
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est.<br />
              Lorem ipsum dolor sit Lorem, ipsum dolor.
        </span>

        <a href={resume}download ><button className="button but1">Download CV</button></a>
      </div>
    
    <div className="cards">
        <div style={{left:'27.5rem',top:'-2.5rem'}}>
        <Cards
        emoji = {Glass}
        heading = {'< Developer />'}
        detail={"Html, Css, Js, React Js"} />
       </div>

       <div style={{left:'59rem', top:'-6rem'}}>
        <Cards
        emoji = {Heart}
        heading = {'< Design />'}
        detail={"Canva, Swiper,  Vector Images"} />
       </div>

       <div style={{left:'43rem', top:'-13rem'}}>
        <Cards
        emoji = {Humble}
        heading = {'< Adaptive />'}
        detail={"Leadership, Adaptive, Quick Learner"} />
       </div>
    </div>

    </div>
  )
}

export default Services
