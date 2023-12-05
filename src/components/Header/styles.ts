import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DivContainer = styled.div`
  grid-area: header;
`

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
`

export const DivImgCarros = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  `

export const ImgCarros = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const DivMenuSelection = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 4rem;
`

export const ButtonsMenuSelection = styled(NavLink)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme['blue-buttons']};
  color: ${props => props.theme.white};
  border: 0.1rem solid;
  border-radius: 0.6rem;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  
  :after {
    background-color: '#6c6cff'
  }

  :hover {
    background-color: ${props => props.theme.black};
  }
`
