import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px;

    @media (${(props) => props.theme.breaks.xl}) {
        gap: 0px;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`; 

export const WrapperContent = styled.div`
    width: 50%;
    /* background: red; */
    display: flex;
    align-items: center;
    gap: 40px;
    
    @media (${(props) => props.theme.breaks.lg}) {
        justify-content: center;
        width: 80%;
    }

`;

export const MenuOptions = styled.div<{ active: Number }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 240px;
    background: #e4e0dd;
    width: 13px;
    border: 1px solid #000;
    border-radius: 6px;
    transition: background-color 0.2s ease-in;
    /* background: blue; */

    .active{
        background-color: ${(props) => (props.active == 1 ? "#631F22" : "#000")};
        color: #fff;
        
        &:hover{
            background-color: #000;
        }
    }

    @media (${(props) => props.theme.breaks.md}) {
        /* position: absolute; */
        height: 240px;
        left: 30%;
    }

`;

export const Option = styled.div`
    width: 100%;
    height: calc(100%/3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in;
    border-radius: 6px;

    &:hover{
        cursor: pointer;
        background-color: #bab2ad;
    }

`;

export const Content = styled.div<{ active: Number }>`
   
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (${(props) => props.theme.breaks.lg}) {
        align-items: flex-start;
    }

    h1{
        font-size: 4.3rem;
        max-height: 250px;
        overflow: hidden;
        color: ${(props) => (props.active == 1 ? "#631F22" : "#000")};

        @media (${(props) => props.theme.breaks.lg}) {
            font-size: 3rem;
        }

        @media (${(props) => props.theme.breaks.xl}) {
            font-size: 3rem;
        }

    }

    p{
        font-size: 1rem;
        opacity: 0.7;
        line-height: 1.2rem;
        text-align: justify;
        min-height: 150px;
    }

`;

export const ContentImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -80px;

    @media (${(props) => props.theme.breaks.lg}) {
        width: 80%;
    }

    @media (${(props) => props.theme.breaks.md}) {
        .photo-main{
            max-width: 80%;
            max-height: 40%;
        }
    }

   
`;

export const Buttons = styled.div<{ active: Number }>`
    display: flex;
    align-items: center;
    gap: 18px;

    .transparent{
        background: transparent;
        border: 1px solid ${(props) => (props.active == 1 ? "#631F22" : "#000")};
        color: #000;
    }

    button{
        width: 140px;
        height: 40px;
        /* background: #000; */
        background: ${(props) => (props.active == 1 ? "#631F22" : "#000")};
        color: #e4e0dd;
        font-weight: bold;
        border: none;
        border-radius: 6px;
    }

    @media (${(props) => props.theme.breaks.lg}) {
        justify-content: center;
    }

`;