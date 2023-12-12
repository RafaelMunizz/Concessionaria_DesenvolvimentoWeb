import { useParams } from "react-router-dom";
import { DivCardPost } from "../Posts/styles";
import { useEffect, useState } from "react";
import { posts } from "../../config/posts";

interface Carro {
  id: string
  anunciante: string
  carro: string
  endereco: string
  valor: number
  fotos: string[]
}

export function Details() {

  const [car, setCar] = useState<Carro>()

  const { id } = useParams()

  useEffect(() => {
    posts.map(element => {
      if(element.id === +id){
        setCar(element)
      }
    })
  })

  return (
    <div>
      <h1>Detalhes - {car?.carro}</h1>
    </div>
  )
}