import { AdressCardPost, AdvertiserCardPost, ButtonSearch, DivCardPost, DivPosts, FormSearch, ImageCardPost, InputSearch, NavCardPost, PriceCardPost, TitleCarCardPost } from "./styles";
import { posts } from "../../config/posts";
import { FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";

// { id, anunciante, carro, endereco, valor, fotos}
export interface Anunciante {
  id: number
  nome: string
  email: string
  cpf: string
  telefone: string
  rua: string
  numero: string
  bairro: string
  funcao: number
}
interface Carros {
  id: number
  marca: string
  modelo: string
  foto: string
  ano: number
  preco: number
  anunciante: Anunciante
}

export function Posts() {
  const [postsCars, setPostsCars] = useState<Carros[]>([])
  const [carToSearch, setCarToSearch] = useState('')

  useEffect(() => {
    const getCars = async () => {
      try {
        const result = await api.get('/carros')
        setPostsCars(result.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getCars()
    
  },[])

  const filteredCars = postsCars.filter((element: Carros) => 
    element.modelo.toUpperCase().includes(carToSearch.toUpperCase()) || 
    element.preco.toString().toUpperCase().includes(carToSearch.toUpperCase()) || 
    element.marca.toString().toUpperCase().includes(carToSearch.toUpperCase()))

  function handleSearchCars(e: FormEvent) {
    e.preventDefault()

    console.log(carToSearch)
    setPostsCars(filteredCars)
  }

  return (
    <div>
      <FormSearch onSubmit={handleSearchCars}>

        <InputSearch type="text" value={carToSearch} placeholder="Digite o carro ou valor" onChange={(e) => {setCarToSearch(e.target.value)}}/>
        {/* <ButtonSearch type="submit" >Buscar</ButtonSearch> */}
      </FormSearch>
      <DivPosts>

        {filteredCars.map(({ id, marca, modelo, ano, preco, foto, anunciante}) => (
            <NavCardPost to={`/posts/${id}`}>
              <DivCardPost key={id}>

                <ImageCardPost src={foto} alt="" />
                <PriceCardPost>R$ {preco}</PriceCardPost>
                <TitleCarCardPost>{marca} {modelo} {ano}</TitleCarCardPost>
                <AdvertiserCardPost>{anunciante.nome}</AdvertiserCardPost>
                <AdressCardPost>{anunciante.bairro}</AdressCardPost>
              </DivCardPost>
            </NavCardPost>
        ))}
      </DivPosts>
    </div>
  )
}