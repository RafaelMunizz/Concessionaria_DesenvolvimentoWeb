import { FormEvent, useState } from "react";
import { ButtonLogin, DivMainLogin, FormLogin, InputFormLogin, LabelFormLogin } from "./styles";
import { useNavigate } from 'react-router-dom'

export function Login(){

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log({
      user,
      password
    })

    // Fazer verificação do user
    if(user == "rafa@gmail.com") {

      //setInterval(() => {navigate("/home")}, 1000)
    }

    navigate("/home")

  }

  return( 
    <DivMainLogin>
      <h1>Concessionária </h1>
      <FormLogin onSubmit={handleSubmit}>
        <LabelFormLogin>Usuário</LabelFormLogin>
        <InputFormLogin type="email" value={user} onChange={(e) => {setUser(e.target.value)}} required/>
        <LabelFormLogin>Senha</LabelFormLogin>
        <InputFormLogin type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
        <ButtonLogin type="submit">Enviar</ButtonLogin>
      </FormLogin>
    </DivMainLogin>
  )
}

// target.innerHTML