// Import global style for the application
import GlobalStyle from './Components/Styles/Global'

// import the ThemeProvider from Stymed components
import { ThemeProvider } from "styled-components";
import MainTheme from "./Components/Styles/MainTheme";

import Header from "./Components/Header/Header";
import { StyledContainer } from "./Components/Styles/Container.styled";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <>
      <GlobalStyle/>
        <Header />
        <StyledContainer>
          <h1>Hello world</h1>
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
