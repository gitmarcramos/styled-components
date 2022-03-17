import { StyledButton } from "./StyledButton";

export default function Button(props) {
  return (
    <>
      <StyledButton>{props.children}</StyledButton>
    </>
  );
}
