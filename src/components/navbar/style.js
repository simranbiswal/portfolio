import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';


export const NavbarWrapper = styled.div`

box-sizing: border-box;
border: 1px solid #6493AD;
padding: 5px;
position: sticky;
top: 0px;
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: #6493AD;
z-index: 2;
margin-bottom: 20px;
height:50px;
align-items: center;
border-radius: 5px;
margin: 0px;
`

export const Navnames = styled(HashLink)`
color:#143d59;
font-family:cursive;
font-size:20px;
font-weight:bold;

`


