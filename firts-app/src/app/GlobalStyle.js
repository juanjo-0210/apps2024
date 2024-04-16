import { createGlobalStyle } from "styled-components"
import font from "../assets/font/Nicolast.ttf"

export const Globalstyle = createGlobalStyle`
    *{
       box-sizing: border-box;
       margin: 0;
       padding: 0;
    }
    body{
        background-color: #f1f1f1;
        
        /* justify-content: center; */
        height: 100vh;
    }
    @font-face {
        font-family: nicolas;
        src: url(${font});
    }
    img .trivial{
        width: 350px;
        height: 350px;
    }
    #root{
        /* width: 1200px;
        margin: auto;
        display: flex;
        justify-content: center; */
    }
    h1{
        margin: 0;
    }
`