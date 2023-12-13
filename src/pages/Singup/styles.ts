import { NavLink } from 'react-router-dom'
import {styled} from 'styled-components'

export const DivMainSingup = styled.div`
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

export const FormSingup =   styled.form`
display: flex;
flex-direction: column;
`

export const LabelFormSingup = styled.label`
  font-size: 2rem;
`

export const InputFormSingup = styled.input`
  border: 1px solid ${(props) => props.theme['gray-border']};
  border-radius: 8px;
  margin: 0.5rem 0;
  padding: 0.4rem;
`

export const ButtonSingup = styled.button`
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
