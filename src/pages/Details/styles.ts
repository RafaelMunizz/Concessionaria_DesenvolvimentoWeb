import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CarImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CarInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const PrecoCarro = styled.h2`
  font-size: 35px;
  color: #333;
`;

export const CarDetails = styled.h3`
  font-size: 20px;
  color: #555;
  margin: 5px 0;
`;

export const AnuncianteDetailsTitle = styled.h2`
  font-size: 30px;
  color: #333;
`;

export const AnuncianteInfo = styled.div`
margin-top: 20px;
text-align: center;
`;

export const AnuncianteDetails = styled.h3`
font-size: 20px;
color: #555;
margin: 5px 0;
`;

export const ButtonDeleteCar = styled.button`
  border: 1px solid ${props => props.theme['gray-border']};
  background-color: ${props => props.theme["red-buttons"]};
  color: ${props => props.theme.white};
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  margin: 30px;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`