import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
`;

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1{
        font-size: 5.5rem;
    }

    p{
        font-size: 1rem;
        opacity: 0.7;
        line-height: 1.2rem;
        text-align: justify;
    }

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