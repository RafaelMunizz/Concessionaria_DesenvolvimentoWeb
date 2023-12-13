import { ButtonContact, DivConteinerContact, FormContact, InputFormContact, LabelFormContact, TitleContact } from "./styles";

export function Contact() {

  function handleSaveContact()  {
    alert("Email guardado!");
  }

  return(
    <DivConteinerContact>
      <h1>Entre em contato conosco </h1>
      <TitleContact>Digite seu email que entraremos em contato futuramente</TitleContact>
      <FormContact action="">
        <LabelFormContact>Email</LabelFormContact>
        <InputFormContact type="email" required/>
        <ButtonContact onClick={handleSaveContact} type="submit">Enviar</ButtonContact>
      </FormContact>
    </DivConteinerContact>
  )
}