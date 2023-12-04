import { ButtonLogin, DivMainLogin, FormLogin, InputFormLogin, LabelFormLogin } from "./styles";

export function Login(){
  return(
    <DivMainLogin>
      <h1>Concessionária </h1>
      <FormLogin action="">
        <LabelFormLogin>Usuário</LabelFormLogin>
        <InputFormLogin type="email" required/>
        <LabelFormLogin>Senha</LabelFormLogin>
        <InputFormLogin type="password" required/>
        <ButtonLogin type="submit">Enviar</ButtonLogin>
      </FormLogin>
    </DivMainLogin>
  )
}