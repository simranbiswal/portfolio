import styled from "styled-components";

export const ContactWrapper = styled.div`
padding: 10px;
border:1px solid lightslategrey;
border-radius: 10px;
color: white;
margin: 50px;
background-color: lightslategrey;
`
export const Icons = styled.img`
width:5vh;
`

export const IconContainer=styled.div`
display: flex;
justify-content: space-evenly;
`
export const EmailWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap: 10px;
`

export const Emailtext = styled.p`
font-style: italic;
color: darkblue;
text-decoration: solid;
font-weight: bolder;
font-size: 30px;
@media (max-width: 640px) {
    font-size: 15px;
}


`
export const PhoneWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap: 10px;
`

export const Phonetext = styled.p`
font-style: italic;
color: darkblue;
text-decoration: solid;
font-weight: bolder;
font-size: 30px;
@media (max-width: 640px) {
    font-size: 15px;
}
`


export const Resume = styled.div`
//box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
color:wheat;
font-size: 20px;
width: 30vw;

@media (max-width: 400px) {
    font-size: 10px;
}

font-weight: bolder;
/* background-color: lightgrey; */
text-align: center;
align-self: center;
padding-left: 10px;
`

export const ResumeWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-top: 10px;
padding: 10px;
border-radius: 25px;
background-color: purple;
text-align: center;


`
export const Title = styled.h1`
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-shadow:2px 1px 3px paleturquoise;
color:rebeccapurple;
`