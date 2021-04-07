import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/routes";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`
function App() {

  return (
      <>

          <GlobalStyle />
        <Router>
            <Routes />
        </Router>
      </>
)
}

export default App;
