import React from 'react'
import Cube from '../Cube/Cube'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='t-container' id='testimonial'>
      <section className="t-wrapper">
        <div className="t-left">
            <span>Service Satisfaction</span>
            <span>"All your need in best hands"</span>
            <span>With good interpersonal skills and adaptive in nature, Got many appreciations from<br/> co-workers, clients and customers.<br/>
Perfection and dedication in work and personal interest towards works plays the important role.<br/>
Assuring the better and upgrading skillset, adaptive with positivity makes the good team player<br/> in Work culture.</span>
      <span>
      •To utilize my technical skills and provide a professional service to customers by applying <br/>and honing my knowledge and working in a challenging and motivating working environment.<br />
        </span>
        <span>
        •To develop skills in communication, stress management and work life balance.
        </span>
      </div>
      </section>
      <div className="t-cube">
      <Cube  />
      </div>
      </div>
    
  )
}

export default Testimonial
