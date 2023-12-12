import { ButtonsMenuSelection, DivContainer, DivImgCarros, DivMenuSelection, DivTitle, ImgCarros, NavLinkIconLogout, NavLinkIconUser } from "./styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export function Header() {
  return (
    <DivContainer>
      <DivTitle>
        <h1>Auto Ofertas Online</h1>
        <NavLinkIconUser to="/user">
          <AccountCircleIcon />
        </NavLinkIconUser>
        <NavLinkIconLogout to="/login">
          <LogoutIcon />
        </NavLinkIconLogout>
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