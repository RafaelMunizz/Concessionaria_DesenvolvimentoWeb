import { useParams } from "react-router-dom";
import { DivCardPost } from "../Posts/styles";
import { useEffect, useState } from "react";
import { posts } from "../../config/posts";
import { api } from "../../api/api";

interface Carro {
  id: string
  anunciante: string
  carro: string
  endereco: string
  valor: number
  fotos: string
  id_anunciante: number
}

export function Details() {

  const [car, setCar] = useState<Carro>()

  const { id } = useParams()

  useEffect(() => {
    const getCars = async () => {
      try {
        const result = await api.get('/carros')

        result.data.map(element => {
          if(element.id === +id){
            setCar(element)
          }
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    getCars()
    
  })

  return (
    <div>
      <h1>Detalhes - {car?.carro}</h1>
    </div>
  )
}

