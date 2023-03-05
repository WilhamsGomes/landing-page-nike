import styled from "styled-components";

export const Overflow = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 350px;
    min-height: 450px;
    background: #000;
    border-radius: 12px;
    color: #fff;
`;

export const ButtonExit = styled.button`
    border: none;
    width: 32px;
    height: 32px;
`;