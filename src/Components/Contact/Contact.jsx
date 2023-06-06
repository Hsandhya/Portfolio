import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='co-wrapper' id='contact'>
        <div className="co-left">
            <span>Get in touch</span>
            <span>Contact-Me</span>
            <span>"To give real service you must add something which cannot be bought <br/>or measured with money,
                 and that is sincerity and integrity."
                   </span>

                   <div className="co-right">
                    
                    <span>Name</span>
                    <input type="text" />
                    <span>Email</span>
                    <input type="email" />
                    <span>Phone Number</span>
                    <input type="number" />
                    <span>Message</span>
                    
                    <textarea name="" id="" cols="30" rows="10"></textarea>   
                   
                    <div className='but2'>
                    <button className="button">Submit</button>
                        </div>                  
                   </div>
        </div>
      



    </div>
  )
}

export default Contact
