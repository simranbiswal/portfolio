import React from 'react';
import {NavbarWrapper,Navnames} from "./style.js";


const Navbar = () => {
  return (
    <NavbarWrapper>
        <Navnames smooth to="/#bioId" >Bio</Navnames>
        <Navnames smooth to="/#skillsId">Skills</Navnames>
        <Navnames smooth to="/#projectsId">Projects</Navnames>
        <Navnames smooth to="/#contactId">Contact</Navnames>
    </NavbarWrapper>
  )
}

export default Navbar

