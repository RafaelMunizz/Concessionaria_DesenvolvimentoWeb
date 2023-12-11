import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonRegisterVehicle, DivContainerUserPage, DivUserData, FormRegisterVehicle, InputRegisterVehicle, LabelRegisterVehicle } from "./styles";

export function UserPage() {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log({
      brand,
      model,
      year,
      price,
    })

    //navigate("/home")

  }
  
  return (
    <DivContainerUserPage>
      <h2>Dados do usuário:</h2>
      <DivUserData>
        <h3>Nome de usuário: {"{name}"}</h3>
        <h3>Email: {"{email}"}</h3>
        <h3>CPF: {"{cpf}"}</h3>
        <h3>Telefone: {"{telephone}"}</h3>
        <h3>Endereço: {"{adress}"}</h3>
        <h3>Tipo do usuário: {"{type}"}</h3>
      </DivUserData>
      <h2>Cadastrar novo anúncio:</h2>
      <FormRegisterVehicle onSubmit={handleSubmit}>
        <LabelRegisterVehicle>Marca</LabelRegisterVehicle>
        <InputRegisterVehicle type="text" value={brand} onChange={(e) => {setBrand(e.target.value)}} required/>
        <LabelRegisterVehicle>Modelo</LabelRegisterVehicle>
        <InputRegisterVehicle type="text" value={model} onChange={(e) => {setModel(e.target.value)}} required/>
        <LabelRegisterVehicle>Ano</LabelRegisterVehicle>
        <InputRegisterVehicle type="number" value={year} onChange={(e) => {setYear(e.target.value)}} required/>
        <LabelRegisterVehicle>Preço</LabelRegisterVehicle>
        <InputRegisterVehicle type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} required/>
        <ButtonRegisterVehicle type="submit">Enviar</ButtonRegisterVehicle>
      </FormRegisterVehicle>
    </DivContainerUserPage>
  )
}