import { Header } from "../../components/Header"
import { DivContainerHome, HomeContainer } from "./styles"
import ImagemOferta1 from "../../assets/images/Oferta_Natal.png"
import ImagemOferta2 from "../../assets/images/Oferta2.png"
import ImagemOferta3 from "../../assets/images/Oferta3.jpg"
import ImagemOferta4 from "../../assets/images/Oferta4.jpeg"

export function Home() {
  return (
    <HomeContainer>
      <h2>Confira alguma de nossas ofertas</h2>
      <DivContainerHome>
        <img src={ImagemOferta1} alt="" />
        <img src={ImagemOferta4} alt="" />
        <img src={ImagemOferta2} alt="" />
        <img src={ImagemOferta3} alt="" />
      </DivContainerHome>
    </HomeContainer>
  )
}