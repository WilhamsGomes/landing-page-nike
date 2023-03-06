import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    svg{
        cursor: pointer;
    }

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    margin-top: 16px;

    @media (max-width: 490px) {
        gap: 50px;
    }

`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 60px;
    transition: all 1s ease-in;

    .active{
        border-bottom: 2px solid #000;
        font-weight: bold;
    }

    @media (${(props) => props.theme.breaks.sm}) {
        gap: 15px;
    }

    @media (max-width: 450px) {
        display: none;
    }

`;

export const Item = styled.li`
    font-size: 1rem;
    font-weight: 500;

    &:hover{
        cursor: pointer;
    }

`;

export const WrapperCart = styled.div`
    width: 48px;
    padding: 8px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const QuantityItem = styled.div`
    position: absolute;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 50%;
    background: #fff;
`;