import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 100px auto;
  border: 1px solid black;
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(4, 1fr);
`;
