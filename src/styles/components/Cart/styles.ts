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
    height: 500px;
    background: #000;
    border-radius: 12px;
    color: #fff;
    z-index: 99;
`;

export const ButtonExit = styled.button`
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    font-weight: 600;
    float: right;
    background: #BAB2AD;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
`;

export const Content = styled.div`
    height: 350px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
    padding: 8px;
`;

export const Item = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #010105;
    border-bottom: 1px solid #BAB2AD;
    padding: 4px;
    border-radius: 6px;

    h4{
        font-size: 0.8rem;
        opacity: 0.7;
    }

`;

export const InfosBasic = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-weight: 600;
        font-size: 0.9rem;
        max-width: 70%;
    }

`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100%;
    
    button{
        width: 18px;
        border: none;
        font-weight: 600;
        border-radius: 2px;
        background: #fff;
    }

`;

export const ButtonBuy = styled.button`
    width: 95%;
    height: 40px;
    border: none;
    border-radius: 6px;
    margin: 8px;
    background: #BAB2AD;
    font-weight: 600;
`;