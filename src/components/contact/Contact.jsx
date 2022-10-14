import React from 'react'
import {ContactWrapper} from "./style.js";

const Contact = () => {
  return (
   
       <ContactWrapper id="contactId">
        <div>
          <p>Email</p>
          <p>simranbiswal102@gmail.com</p>
        </div>
        
        <div>
          <p>Mobile number</p>
          <p>8855909529 </p>
        </div>

        <div>
          <button>Github</button>
          <button>LinkedIn</button>
        </div>

        <div>
          <button>Click me to download Resume !</button>
        </div>
        
        
    </ContactWrapper>
    
  )
}

export default Contact