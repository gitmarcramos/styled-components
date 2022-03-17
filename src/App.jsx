//Styled components
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyle } from "./GlobalStyles";
// Components
import Button from "./Components/Button/Button";
import InsideButton from "./Components/Button/StyledButton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <h1 className="title">Hello world</h1>
        <Button background="violet">Click me</Button>
        <InsideButton background="violet">Inside Button</InsideButton>
      </>
    </ThemeProvider>
  );
}

export default App;
