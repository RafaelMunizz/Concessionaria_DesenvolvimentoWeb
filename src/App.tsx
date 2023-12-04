import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { LayoutDefault } from './layouts/LayoutDefault'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <BrowserRouter>
          <LayoutDefault>
            <Router />
          </LayoutDefault>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
