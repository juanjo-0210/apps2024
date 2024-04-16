import styled from "styled-components"

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const StyledComponent1 = styled.div`
width: 350px;
height: 350px;
background-color: red;
margin-top: 10px;
    ${mobile}{
         width: 100%;
    }
`

export const StyledComponent2 = styled(StyledComponent1)`
font-family: nicolas;
background-color: blue;
height: auto;
padding: 50px;
&:hover{
    background-color: red;
}
`