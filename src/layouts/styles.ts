import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas: 'header' 'main';

  margin: 0 auto;
  max-width: 1120px;
  background-color: ${props => props.theme.white};
`

export const MainDiv = styled.div`
  grid-area: main;
`