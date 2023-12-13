import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <BrowserRouter>
          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
