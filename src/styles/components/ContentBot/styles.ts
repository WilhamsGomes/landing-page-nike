import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    padding: 20px;
`;

export const MenuOptions = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 240px;
    background: #e4e0dd;
    width: 13px;
    border: 1px solid #000;
    border-radius: 6px;
    transition: background-color 0.2s ease-in;

    .active{
        background-color: #000;
        color: #fff;
        
        &:hover{
            background-color: #000;
        }
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

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1{
        font-size: 4.3rem;
        max-height: 250px;
        overflow: hidden;
    }

    p{
        font-size: 1rem;
        opacity: 0.7;
        line-height: 1.2rem;
        text-align: justify;
    }

`;

export const ContentImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -80px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    button{
        width: 140px;
        height: 40px;
        background: #000;
        color: #e4e0dd;
        font-weight: bold;
        border: none;
        border-radius: 6px;
    }

`;