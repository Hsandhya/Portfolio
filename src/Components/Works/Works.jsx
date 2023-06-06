import React from 'react'
import SliderA from '../SliderA/SliderA'
import back8 from '../../img/back8.png'
import './Works.css'
const Works = () => {
  return (
    <div>
      <section className="w-wrapper" id='portfolio'>
        <div className="back8">
          <img src={back8} alt="" />
        </div>
        <div className="w-container">
            <div className="s-left">
                <span>Certifications &</span>
                <span>Milestones</span>
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere. <br/>
                Lorem ipsum dolor sit amet.
                </span>
                <button className="button but2">Learn More</button>
            </div>
        </div>
        
      </section>
      <SliderA/>
    </div>
  )
}

export default Works
