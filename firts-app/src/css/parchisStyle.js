import styled from "styled-components";
import background from "../assets/img/parchis.svg"

export const Parchis = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
margin: auto;
width: ${({width}) => width}px;
height: ${({height}) => height}px;
position: relative;
`

export const Box = styled.div`
position: absolute;
width: ${({width}) => width}%;
height: ${({height}) => height}% ;
top: ${({y}) => y}%;
left: ${({x}) => x}%;
border: 1px solid black;
font-size: x-small;
display: flex;
justify-content: center;
align-items: center;
`

export const Azul = styled.div`
border-radius: 100%;
width: 5%;
height: 5%;
top: ${({azul}) => azul.top}% ;
left: ${({azul}) => azul.left}%;
background-color: blue;
position: absolute;
border: 1px solid black;
`
export const Rojo = styled.div`
border-radius: 100%;
width: 5%;
height: 5%;
top: ${({rojo}) => rojo.top}% ;
left: ${({rojo}) => rojo.left}%;
background-color: red;
position: absolute;
border: 1px solid black;
`