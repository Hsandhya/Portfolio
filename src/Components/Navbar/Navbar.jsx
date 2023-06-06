import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">SANDHYA</div>
            
        </div>

        <div className="n-right">
            <div className="n-list">
            <ul>
                <li>Home</li>
                 <li>
                  <Link activeClass='active' to='service' spy={true} smooth={true}>
                  Services
                  </Link>
                  </li>
                  <li>
                  <Link activeClass='active' to='experience' spy={true} smooth={true}>
                  Experience
                  </Link>
                  
                  </li>

                <li>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true}>
                
                  Portfolio
                  </Link>
                  </li>
                  
                <li>
                <Link activeClass='active' to='testimonial' spy={true} smooth={true}>

                  Testimonials
                  </Link>
                  </li>
            </ul>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true}>
            <button className='button'>Connect</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
