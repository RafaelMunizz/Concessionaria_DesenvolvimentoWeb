import { FormEvent, useState, useContext } from "react";
import { ButtonLogin, DivMainLogin, DivSingup, FormLogin, InputFormLogin, LabelFormLogin, NavSingup } from "./styles";
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { api } from '../../api/api'

export function Login(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  const { changeUserId } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log({
      user,
      password
    })

    try {
      const response = await api.post('/anunciantes/autenticar', { email: user, senha: password })
      changeUserId(response.data)
      navigate("/home")
    } catch {
      alert("Usuário/Senha incorretos")
    }
  }

  return( 
    <DivMainLogin>
      <h1>Auto Ofertas Online </h1>
      <FormLogin onSubmit={handleSubmit}>
        <LabelFormLogin>Usuário</LabelFormLogin>
        <InputFormLogin type="email" value={user} onChange={(e) => {setUser(e.target.value)}} required/>
        <LabelFormLogin>Senha</LabelFormLogin>
        <InputFormLogin type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
        <ButtonLogin type="submit">Enviar</ButtonLogin>
      </FormLogin>
      <DivSingup>
        <NavLink to={'/singup'}>Cadastre-se</NavLink>
      </DivSingup>
    </DivMainLogin>
  )
}

// target.innerHTML