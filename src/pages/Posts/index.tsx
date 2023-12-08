import { AdressCardPost, AdvertiserCardPost, ButtonSearch, DivCardPost, DivPosts, DivSearch, ImageCardPost, InputSearch, PriceCardPost, TitleCarCardPost } from "./styles";
import { posts } from "../../config/posts";

// { id, anunciante, carro, endereco, valor, fotos}

export function Posts() {
  return (
    <div>
      <DivSearch>
        <label>Buscar</label>

        <InputSearch type="text" />
        <ButtonSearch>Ir</ButtonSearch>
      </DivSearch>
      <DivPosts>

        {posts.map(({ id, anunciante, carro, endereco, valor, fotos}) => (
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