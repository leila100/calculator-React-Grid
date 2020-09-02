import styled from "styled-components";

export const Button = styled.button`
  margin: 5px auto;
  background-color: ${(props) => (props.cancel ? "#3572DC" : props.equal ? "#28D05F" : "#777777")};
  color: white;
  width: ${(props) => (props.cancel || props.zero ? "91%" : "55px")};
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  grid-column: ${(props) => (props.cancel || props.zero) && "1 / 4"};
`;
