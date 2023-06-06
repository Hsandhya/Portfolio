import React from 'react'
import './Experience.css' 
import back1 from '../../img/back1.png'

const Experience = () => {
  return (
    <div className='experience' id='experience'>
      <div className="back1">

        <img src={back1} alt="" />
      </div>
      
      <div className="exp">
        <div className="txt1">1+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="exp">
        <div className="txt1">2+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="exp">
        <div className="txt1">3+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
    </div>
  )
}

export default Experience
