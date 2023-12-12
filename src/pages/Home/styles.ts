import styled from "styled-components";

export const DivContainerHome = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
  gap: 2rem;
  
  img {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
    border-radius: 8px;
  }
  `

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
`