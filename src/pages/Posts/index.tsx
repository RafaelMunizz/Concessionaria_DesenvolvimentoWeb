import { DivCardPost, DivSearch } from "./styles";
import { posts } from "../../config/posts";

// { id, anunciante, carro, endereco, valor, fotos}

export function Posts() {
  return (
    <div>
      <DivSearch>
        <label>Busca </label>

        <input type="text" />
        <button>Ir</button>
      </DivSearch>
      {posts.map(({ id, anunciante, carro, endereco, valor, fotos}) => (
        <DivCardPost key={id}>

          <h3>anunciante: {anunciante}</h3>
          <h3>carro: {carro}</h3>
          <h3>endereco: {endereco}</h3>
          <h3>valor: {valor}</h3>
          <img src={fotos[0]} alt="" />
       
          <br />
          <br />
        </DivCardPost>
      ))}
    </div>
  )
}