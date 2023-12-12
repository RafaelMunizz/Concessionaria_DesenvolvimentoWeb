import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme['Focus-color']};
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.5rem Roboto, sans-serif;
  }

  @media((max-width: 600px)) {
    html {
      font-size: 50%;
    }
  }
  @media((max-width: 685px) and (min-width: 601px)) {
    html {
      font-size: 58%;
    }
  }
  @media((max-width: 787px) and (min-width: 685px)) {
    html {
      font-size: 67%;
    }
  }
  @media((max-width: 1021px) and (min-width: 787px)) {
    html {
      font-size: 77%;
    }
  }
`

export const DivMasterAfterLogin = styled.div`
 background-color: ${props => props.theme['gray-border']};
`