import { FormEvent, useState } from "react";
import { ButtonSingup, DivMainSingup, FormSingup, InputFormSingup, LabelFormSingup } from "./styles";
import { NavLink, useNavigate } from 'react-router-dom'
import { DivSingup } from "../Login/styles";
import { Select, MenuItem } from '@mui/material'

interface Anunciante {
  nome: string
  email: string 
  cpf: string 
  telefone: string 
  rua: string 
  numero: string
  bairro: string 
  senha: string
  funcao: number
}

export function Singup(){

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [senha, setSenha] = useState('')


  const navigate = useNavigate();

  // Função de validação de e-mail usando regex
  const validarEmail = (email: string): boolean => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  // Função de validação de CPF usando regex
  const validarCPF = (cpf: string): boolean => {
    const regexCPF = /^\d{11}$/;
    return regexCPF.test(cpf);
  };

  // Função de validação de telefone usando regex
  const validarTelefone = (telefone: string): boolean => {
    const regexTelefone = /^\d{11}$/;
    return regexTelefone.test(telefone);
  };

  // Função de validação de senha (adapte conforme suas regras)
  const validarSenha = (senha: string): boolean => {
    return senha.length >= 6;
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  
    // Array para armazenar mensagens de erro
    const erros: string[] = [];
  
    // Funções de validação e mensagens de erro
    if (!validarEmail(email)) {
      erros.push("E-mail inválido");
    }
  
    if (!validarCPF(cpf)) {
      erros.push("CPF inválido");
    }
  
    if (!validarTelefone(telefone)) {
      erros.push("Telefone inválido");
    }
  
    if (!validarSenha(senha)) {
      erros.push("Senha deve ter pelo menos 6 caracteres");
    }
  
    // Se houver erros, exiba-os; caso contrário, prossiga com o envio
    if (erros.length > 0) {
      alert("Por favor, corrija os seguintes erros:\n" + erros.join("\n"));
    } else {
      console.log({
        email,
        senha,
        nome,
        cpf,
        telefone,
        rua,
        numero,
        bairro,
      });
  
      alert("Usuário criado com sucesso!");
      navigate("/Login");
    }
  }

  return( 
    <DivMainSingup>
      <h1>Auto Ofertas Online </h1>
      <FormSingup onSubmit={handleSubmit}>

        <LabelFormSingup>Email</LabelFormSingup>
        <InputFormSingup type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>

        <LabelFormSingup>Senha</LabelFormSingup>
        <InputFormSingup type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} required/>

        <LabelFormSingup>Nome</LabelFormSingup>
        <InputFormSingup type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} required/>

        <LabelFormSingup>CPF</LabelFormSingup>
        <InputFormSingup type="text" value={cpf} onChange={(e) => {setCpf(e.target.value)}} required/>

        <LabelFormSingup>Telefone</LabelFormSingup>
        <InputFormSingup type="text" value={telefone} onChange={(e) => {setTelefone(e.target.value)}} required/>

        <LabelFormSingup>Bairro</LabelFormSingup>
        <InputFormSingup type="text" value={bairro} onChange={(e) => {setBairro(e.target.value)}} required/>

        <LabelFormSingup>Rua</LabelFormSingup>
        <InputFormSingup type="text" value={rua} onChange={(e) => {setRua(e.target.value)}} required/>

        <LabelFormSingup>Número</LabelFormSingup>
        <InputFormSingup type="text" value={numero} onChange={(e) => {setNumero(e.target.value)}} required/>

        <ButtonSingup type="submit">Enviar</ButtonSingup>
      </FormSingup>
      
      <DivSingup>
        <NavLink to={'/login'}>Voltar para login</NavLink>
      </DivSingup>
    </DivMainSingup>
  )
}

// target.innerHTML