import { useNavigate, useParams } from "react-router-dom";
import { DivCardPost } from "../Posts/styles";
import { useContext, useEffect, useState } from "react";
import { posts } from "../../config/posts";
import { api } from "../../api/api";
import { Carros } from "../Posts";
import { DetailsContainer, CarImage, CarInfo, PrecoCarro, CarDetails, AnuncianteDetailsTitle, AnuncianteInfo, AnuncianteDetails, ButtonDeleteCar } from "./styles";
import { AuthContext } from "../../context/AuthContext";

export function Details() {
  const [car, setCar] = useState<Carros>()

  const { id } = useParams()
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const getCars = async () => {
      try {
        const result = await api.get(`/carros/${id}`)
        setCar(result.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getCars()
  },[])

  async function handleDeleteCar () {
      try {
        await api.delete(`/carros/${id}`)
        alert("Carro removido com sucesso!")
        navigate('/posts')
      } catch (error) {
        console.log(error.message)
      }
    }
  

  return (
    <DetailsContainer>
      <CarImage src={car?.foto} alt={car?.modelo} />
      <CarInfo>
        <PrecoCarro>Preço: {car?.preco}</PrecoCarro>
        <CarDetails>Marca: {car?.marca}</CarDetails>
        <CarDetails>Modelo: {car?.modelo}</CarDetails>
        <CarDetails>Ano: {car?.ano}</CarDetails>
        {/* Adicione outros campos da interface Carros conforme necessário */}
      </CarInfo>
      <AnuncianteInfo>
        <AnuncianteDetailsTitle>Detalhes do anunciante:</AnuncianteDetailsTitle>
        <AnuncianteDetails>Nome: {car?.anunciante.nome}</AnuncianteDetails>
        <AnuncianteDetails>Email: {car?.anunciante.email}</AnuncianteDetails>
        <AnuncianteDetails>Telefone: {car?.anunciante.telefone}</AnuncianteDetails>
        <AnuncianteDetails>Rua: {car?.anunciante.rua}</AnuncianteDetails>
        <AnuncianteDetails>Número: {car?.anunciante.numero}</AnuncianteDetails>
        <AnuncianteDetails>Bairro: {car?.anunciante.bairro}</AnuncianteDetails>
      </AnuncianteInfo>

      {user?.funcao === 0 &&(
        <ButtonDeleteCar onClick={handleDeleteCar}>Deletar anúncio</ButtonDeleteCar>
      )}
    </DetailsContainer>
  )
}


// id: number
// nome: string
// email: string
// cpf: string
// telefone: string
// rua: string
// numero: string
// bairro: string