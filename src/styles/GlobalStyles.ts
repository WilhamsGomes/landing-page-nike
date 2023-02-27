import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    *::after{
        box-sizing: border-box;
    }
    *::before{
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{              
        -webkit-font-smoothing: antialiased;
        background: #e4e0dd;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
    button{
        cursor: pointer;
    }      


`;
