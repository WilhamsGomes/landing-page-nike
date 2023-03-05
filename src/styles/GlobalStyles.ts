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

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }
    /* Track */
    /* ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #bab2ad; 
        border-radius: 10px;
    } */
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #bab2ad; 
    border-radius: 10px;
    }


`;
