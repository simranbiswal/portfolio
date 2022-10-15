import React from 'react';
import {Buttons, SingleProjectWrapper, Title,ProjectImg,ButtonContainer,AllProjectsWrapper} from "./style.js";
import carpic from "../../Images/carpic.png";


const Projects = () => {
  
  return (
    <AllProjectsWrapper id='projectsId'>
       <Title>PROJECTS</Title>
    <SingleProjectWrapper >
     
      <div>
        <h2>Car Showroom</h2>
      
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <ProjectImg src={carpic} alt="portfolioicon"/>
          <p>This project holds information regarding different wheelers like two wheelers,three wheelers,four wheelers,six wheelers etc.</p>
      </div>
      <ButtonContainer>
        <Buttons onClick={()=> window.location.href="https://github.com/simranbiswal"}>Github</Buttons>
        <Buttons>Demo</Buttons>
      </ButtonContainer>

      </div>
    </SingleProjectWrapper>
  </AllProjectsWrapper>
  )
}

export default Projects

// border applying to the bos in ProjectsWrapper
//image hover changing property