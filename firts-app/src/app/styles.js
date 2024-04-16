import styled from "styled-components"

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Box = styled.div`
background-color: ${({$back}) => $back ? "red" : "blue"} ;

   
`

export const Trivibox = styled.div`
display: flex;
gap: 30px;
`

export const Question = styled.div`
margin-top: 20px;
font-size: 1.5em;
width: 350px;

`

export const Questionbox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Popup = styled.div`
    padding: 10px 70px;
    background-color: gray;
    color: white;
    border-radius: 5px;
    display: ${({visible}) => visible ? "block" : "none"};
    align-items: center;

`

export const Workbox = styled.div`
display: flex;

`

export const Row = styled.div`
display: flex;
.img{
       max-width: 100%;
       height: 700px;
    }
`

export const Cols = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`
export const Cols4 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`

export const Img = styled.img`
height: 350px;
box-sizing: border-box;
border: ${({$borde}) => $borde && "3px solid red"};
`

export const Scene = styled.div`
    width: ${({ $width }) => $width }px;
    height:${({ $height }) => $height }px;
    background-image:url(${({ $back }) => $back});
    background-size: 100% 100% ;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;
    position: relative;
    margin:auto;
    color: white;
`;

export const Door = styled.div`
    position: absolute;
    left: ${({ data }) => data.x}%;
    top: ${({ data }) => data.y}%;
    width: ${({ data }) => data.width}%;
    height: ${({ data }) => data.height}%;
    border: 1px solid red;
    cursor: pointer;
`;