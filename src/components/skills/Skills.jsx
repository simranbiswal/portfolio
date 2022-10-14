import React from 'react';
import {Images, Skillheader, Skillname, SkillsWrapper} from "./style.js";
import htmlicon from "../../Images/htmlicon.png";
import cssicon from "../../Images/cssicon.png";
import jsicon from "../../Images/jsicon.jpg";
import reacticon from "../../Images/reacticon.png";

const Skills = () => {
  return (
    <div id='skillsId'>
       <Skillheader>SKILLS</Skillheader>
    <SkillsWrapper>
     
      
              
            <div>
              <Images src={htmlicon} alt="portfolioicon"/>
              <Skillname>HTML</Skillname>
            </div>

            <div>
            <Images src={cssicon} alt="cssicon"/>
              <Skillname>CSS</Skillname>
            </div>
            
            <div>
            <Images src={jsicon} alt="jsicon"/>
            <Skillname>Javascript</Skillname>
            </div>

            <div>
            <Images src={reacticon} alt="reacticon"/>
            <Skillname>React</Skillname>
            </div>
      
      
    </SkillsWrapper>
    </div>
  )
}

export default Skills