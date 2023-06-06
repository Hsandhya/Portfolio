import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Floating from '../Floating/Floating'
import GlassEmoji from '../../img/glassesimoji.png'
import Thumbsup from '../../img/thumbup.png'
import crown from  '../../img/crown.png'


import back9 from '../../img/back9.png'
import san from '../../img/san3.png'

const Intro = () => {


  return (
    <div className="intro">
      
       <div className="i-left">
         <div className="i-name">
            <span>
                Hey! I am</span>
                <span>
                    Sandhya H</span>
                    <span>
                       I am a Front End Web Developer with 1 year experience in top MNC Organization, brilliant and innovative thinking ability. 
                    </span>
         </div>
         <button className="button">
            Hire Me
         </button>

         <div className="i-icons">
            <img src={Github} alt="" />
            <a href="https://www.linkedin.com/in/sandhya-h-7a0917224" target='blank'><img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com/sandhya.__.here/" target='blank'><img src={Instagram} alt="" /></a>
         </div>
       </div>

       <div className="i-right">
        <img src={san} alt="" />
        <img src='' alt="" />
        <img src='' alt="" />
        
      <img
        

        src={GlassEmoji} alt="" />


          <div style= {{top:'45%', left:'-25%'}}>
            <Floating image={crown} txt1='Web' txt2='Developer'/>          </div>
            <div style={{left:'26rem',top:'-1rem'}}>
        <Floating image={Thumbsup} txt1='Creative' txt2='Hands'/>
       </div>
       </div>
      
    </div>
  )


}



export default Intro
