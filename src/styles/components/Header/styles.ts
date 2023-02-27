import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 80px;
    margin-top: 16px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 60px;

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