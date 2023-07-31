import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { theme } from "./style/theme.js";

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>
    </>
  )
}

export default App
