import { NavLink } from 'react-router-dom'
import {styled} from 'styled-components'

export const DivMainLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;

  h1 {
    margin-bottom: 2rem;
  }
`

export const FormLogin =   styled.form`
display: flex;
flex-direction: column;
`

export const LabelFormLogin = styled.label`
  font-size: 2rem;
`

export const InputFormLogin = styled.input`
  border: 1px solid ${(props) => props.theme['gray-border']};
  border-radius: 8px;
  margin: 0.5rem 0;
  padding: 0.4rem;
`

export const ButtonLogin = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #3636ff;
  color: ${props => props.theme.white};
  padding: 0.4rem;
  margin-top: 1rem;
  cursor: pointer;
  /* 
  // Quando for NavLink
  display: flex;
  justify-content: center; 
  text-decoration: none;
  align-items: center;
  */

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`

export const DivSingup = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.3rem;

  a {
    text-decoration: none;
  }
`