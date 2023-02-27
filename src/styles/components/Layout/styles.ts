import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background: red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  min-height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  /* overflow-y: hidden; */
`;

export const Content = styled.div`
  width: 100%;
  /* max-width: 1032px; */
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  /* padding: 16px; */
`;