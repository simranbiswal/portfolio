import React from 'react'
import {BioWrapper,ProfileImg} from "./style.js";
import profilepic from "../../Images/profilepic.jpg"


const Bio = () => {
  return (
  
    <BioWrapper id="bioId">
      <div>
        <h1>HI! I AM SIMRAN</h1>
        <p>I am a frontend developer and would love to work with you.</p>
      </div>
      <div>
      <ProfileImg src={profilepic} alt="portfolioicon"/>
      </div>
    
    </BioWrapper>
  
  
  )
}

export default Bio