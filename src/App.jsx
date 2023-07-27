import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { theme } from "./style/theme.js";
import Router from './router';

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
              
              <Router />
              
        </ThemeProvider>
    </>
  )
}

export default App
