import styled from "styled-components";

export const DivConteinerContact = styled.div`
  padding: 5rem;
`

export const TitleContact = styled.h4`
  margin: 2rem 0;
`



export const FormContact =   styled.form`
display: flex;
flex-direction: column;
margin: 2rem 0;
width: 20rem;
`

export const LabelFormContact = styled.label`
  font-size: 2rem;
`

export const InputFormContact = styled.input`
  border: 1px solid ${(props) => props.theme['gray-border']};
  border-radius: 0.7rem;
  margin: 0.5rem 0;
  padding: 0.4rem;
  width: 25rem;

`

export const ButtonContact = styled.button`
  border: 0.2px solid black;
  border-radius: 3rem;
  background-color: #3636ff;
  color: ${props => props.theme.white};
  padding: 0.4rem;
  margin-top: 1rem;
  width: 25rem;

`