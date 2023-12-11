import styled from "styled-components"

export const DivContainerUserPage = styled.div`
  padding: 2rem;
`

export const DivUserData = styled.div`
  margin: 1rem 0 4rem 2rem;
`

export const FormRegisterVehicle =   styled.form`
display: flex;
flex-direction: column;
padding: 1rem;
width: 40rem;
`

export const LabelRegisterVehicle = styled.label`
  font-size: 2rem;
`

export const  InputRegisterVehicle = styled.input`
  border: 1px solid ${(props) => props.theme['gray-border']};
  border-radius: 0.7rem;
  margin: 0.5rem 0;
  padding: 0.4rem;
`

export const ButtonRegisterVehicle = styled.button`
  border: 0.2px solid black;
  border-radius: 3rem;
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
`