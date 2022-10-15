import React from 'react'
import {ContactWrapper,Icons,IconContainer,EmailWrapper,PhoneWrapper,Resume,ResumeWrapper,Emailtext,Phonetext,Title} from "./style.js";
import LinkedIn from "../../Images/inicon.png";
import Github from "../../Images/github.png";
import Phone from "../../Images/phone.png";
import Email from "../../Images/gmail.png";

const Contact = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SimranBiswalResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SimranBiswalResume.pdf';
            alink.click();
        })
    })
}

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
   
       <ContactWrapper id="contactId">
        <Title>CONTACT ME</Title>
        
        <EmailWrapper>
           <Icons src={Email} alt="email"/>
           <Emailtext>simranbiswal102@gmail.com</Emailtext>
        </EmailWrapper>
        
        <PhoneWrapper>
          <Icons src={Phone} alt="contact number"/>
          <Phonetext>8855909529 </Phonetext>
        </PhoneWrapper>

        <IconContainer>
          <Icons src={Github} onClick={() => openInNewTab('https://github.com/simranbiswal')} alt="Github icon" />
          <Icons src={LinkedIn} onClick={() => openInNewTab('https://www.linkedin.com/in/simran-biswal-677a9b229/')} alt="linkdin icon"/>
        </IconContainer>

        <ResumeWrapper>
          <Resume onClick={onButtonClick}>Click me to download Resume !</Resume>
        </ResumeWrapper>
        
        
    </ContactWrapper>
    
  )
}

export default Contact