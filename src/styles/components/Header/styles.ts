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
`;

export const Item = styled.li`
    font-size: 1rem;
    font-weight: 500;

    &:hover{
        cursor: pointer;
    }

`;