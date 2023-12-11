import { AdressCardPost, AdvertiserCardPost, ButtonSearch, DivCardPost, DivPosts, FormSearch, ImageCardPost, InputSearch, PriceCardPost, TitleCarCardPost } from "./styles";
import { posts } from "../../config/posts";
import { FormEvent, useState } from "react";

// { id, anunciante, carro, endereco, valor, fotos}
interface Posts {
  id: string
  anunciante: string
  carro: string
  endereco: string
  valor: number
  fotos: string[]
}

export function Posts() {

    // Carros e usuários possuem interfaces diferentes e individuais
    // Mudar para interfaces que possuem atributos como no banco de dados

  const [postsCars, setPostsCars] = useState(posts)
  const [carToSearch, setCarToSearch] = useState('')

  function handleSearchCars(e: FormEvent) {
    e.preventDefault()

    console.log(carToSearch)
    const filteredCars = posts.filter((element: Posts) => element.carro.toUpperCase().includes(carToSearch.toUpperCase()) || element.valor.toString().toUpperCase().includes(carToSearch.toUpperCase()))
    setPostsCars(filteredCars)
  }

  return (
    <div>
      <FormSearch onSubmit={handleSearchCars}>
        <label>Buscar</label>

        <InputSearch type="text" value={carToSearch} onChange={(e) => {setCarToSearch(e.target.value)}}/>
        <ButtonSearch type="submit" >Ir</ButtonSearch>
      </FormSearch>
      <DivPosts>

        {postsCars.map(({ id, anunciante, carro, endereco, valor, fotos}) => (
          <DivCardPost key={id}>

            <ImageCardPost src={fotos[0]} alt="" />
            <PriceCardPost>R$ {valor}</PriceCardPost>
            <TitleCarCardPost>{carro}</TitleCarCardPost>
            <AdvertiserCardPost>{anunciante}</AdvertiserCardPost>
            <AdressCardPost>{endereco}</AdressCardPost>
          </DivCardPost>
        ))}
      </DivPosts>
    </div>
  )
}