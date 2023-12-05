import { ButtonsMenuSelection, DivContainer, DivImgCarros, DivMenuSelection, DivTitle, ImgCarros } from "./styles";

export function Header() {
  return (
    <DivContainer>
      <DivTitle>
        <h1>Concessionária Qualquer coisa</h1>
      </DivTitle>
      <DivImgCarros>
        <ImgCarros src="https://dicas.olx.com.br/wp-content/uploads/2021/04/tipos-de-carros-capa.png" alt="" />
      </DivImgCarros>
      <DivMenuSelection>
      <ButtonsMenuSelection to={"/home"} >HOME</ButtonsMenuSelection>
      <ButtonsMenuSelection to={"/posts"} >ANÚNCIOS</ButtonsMenuSelection>
      <ButtonsMenuSelection to={"/who"} >QUEM SOMOS</ButtonsMenuSelection>
      <ButtonsMenuSelection to={"/contact"} >CONTATE-NOS</ButtonsMenuSelection>
      </DivMenuSelection>
    </DivContainer>
  )
}