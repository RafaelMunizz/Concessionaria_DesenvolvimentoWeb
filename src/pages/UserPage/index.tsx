import { useState, FormEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonRegisterVehicle, DivContainerUserPage, DivUserData, FormRegisterVehicle, InputRegisterVehicle, LabelRegisterVehicle } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api/api";
import { Anunciante } from "../Posts";

export function UserPage() {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [foto, setFoto] = useState('')
  const [anunciante, setAnunciante] = useState<Anunciante>({} as Anunciante)

  const navigate = useNavigate();

  const {userId} = useContext(AuthContext)

  useEffect(() => {
    const getAnunciante = async () => {
      try {
        const result = await api.get(`/anunciantes/${userId}`)
        setAnunciante(result.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getAnunciante()
  },[])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log({
      marca: brand,
      modelo: model,
      ano: year,
      preco: price,
      foto: foto,
      id_anunciante: userId
    })

    const sendData = async () => {
      try {
        await api.post('/carros', {
          marca: brand,
          modelo: model,
          ano: year,
          preco: price,
          foto: foto,
          id_anunciante: userId
        })
        
      } catch (error) {
        console.log(error.message)
      }
    }
    sendData()

  }
  
  return (
    <DivContainerUserPage>
      <h2>Dados do usuário:</h2>
      <DivUserData>
        <h3>Nome de usuário: {anunciante.nome}</h3>
        <h3>Email: {anunciante.email}</h3>
        <h3>CPF: {anunciante.cpf}</h3>
        <h3>Telefone: {anunciante.telefone}</h3>
        <h3>Endereço: {anunciante.numero}, {anunciante.rua}, {anunciante.bairro}</h3>
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
        <LabelRegisterVehicle>Foto</LabelRegisterVehicle>
        <InputRegisterVehicle type="text" value={foto} onChange={(e) => {setFoto(e.target.value)}} required/>
        <ButtonRegisterVehicle type="submit">Enviar</ButtonRegisterVehicle>
      </FormRegisterVehicle>
    </DivContainerUserPage>
  )
}