import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`;

export const DivPhoto = styled.div`
    width: 150px;
    height: 150px;
    background: #bcb2ab;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in;

    img{
        background-size: cover;
        max-width: 100%;
        max-height: 70%;
    }

    &:hover{
        cursor: crosshair;
        transform: scale(1.2);
    }

`;