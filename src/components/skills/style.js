import styled from "styled-components";

export const SkillsWrapper = styled.div`
height:90vh;
border: 1px solid #0F4D92;
color: white;
margin: 50px;
display: grid;
grid-template-columns: auto auto auto;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: #9585a9;
border-radius: 5px;

@media (max-width: 900px) {
   grid-template-columns: auto auto;

}

@media (max-width: 600px) {
   grid-template-columns: auto;

}
`
export const Skillname = styled.h2`
border: 2px solid #E9EBEE ;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
display: flex;
align-items:center;
justify-content:space-around;
color:black;
text-shadow: 2px 1px 3px goldenrod;
font-family:cursive;
font-size:20px;
font-weight:bold;
width:25vw;
background-color: lightslategray;
border-radius: 5px;



`

export const Skillheader = styled.h1`
/* display: flex;
align-items: center;
justify-content:center; */
text-shadow:2px 1px 2px paleturquoise;;
color: lightsteelblue;
text-align: center;
margin-left: 0%;
`

export const Images = styled.img`
display:flex;
align-items: center;
justify-content: center;
border-radius:50px;
width: 8vw;

@media (max-width: 900px) {
   width: 15vw;

}
`
