import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 50px;
  padding: 8px 16px;
  margin: 0 10px;
  border: none;
  background-color: ${({ background }) => background || "grey"};
  transition: all 300ms ease;

  &:hover {
    background-color: violet;
  }
`;

export default function InsideButton(props) {
  const { background } = props;
  return <StyledButton background={background}>{props.children}</StyledButton>;
}
