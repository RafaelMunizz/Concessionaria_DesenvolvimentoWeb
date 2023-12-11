import { ButtonContact, DivConteinerContact, FormContact, InputFormContact, LabelFormContact, TitleContact } from "./styles";

export function Contact() {
  return(
    <DivConteinerContact>
      <h1>Entre em contato conosco </h1>
      <TitleContact>Digite seu email ou telefone que entraremos em contato </TitleContact>
      <FormContact action="">
        <LabelFormContact>Email</LabelFormContact>
        <InputFormContact type="email" required/>
        <LabelFormContact>Telefone</LabelFormContact>
        <InputFormContact type="tel" required/>
        <ButtonContact type="submit">Enviar</ButtonContact>
      </FormContact>
    </DivConteinerContact>
  )
}