import styled from "styled-components";

export const AllProjectsWrapper=styled.div`
margin: 50px;
display: flex;
flex-direction: column;
`

export const SingleProjectWrapper = styled.div`

border:1px solid red;
color: white;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing:content-box;
background-color: #0b344a;
border: 2px solid #0b344a;
border-radius: 5px;
`

export const Buttons = styled.button`
height:40px;
width:80px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
color:firebrick;
font-size: medium;
font-weight: bolder;
border-radius: 10px;
background-color: lightgrey;

:hover{
  background-color: purple;
}

`

export const Title = styled.h1`
text-align: left;
margin-left: 0%;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-shadow:2px 1px 3px goldenrod;
color:blanchedalmond;
`
export const ProjectImg =styled.img`
width: 20vw;

`

export const ButtonContainer=styled.div`
display: flex;
justify-content: space-around;

`