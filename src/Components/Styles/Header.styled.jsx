import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px;
  background-color: ${({ theme, background }) => background || theme.colors.mainBlack};
`;
