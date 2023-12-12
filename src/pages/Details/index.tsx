import { useParams } from "react-router-dom";
import { DivCardPost } from "../Posts/styles";

export function Details() {
  const { id } = useParams()
  return (
    <div>
      <h1>Detalhes - {id}</h1>
    </div>
  )
}