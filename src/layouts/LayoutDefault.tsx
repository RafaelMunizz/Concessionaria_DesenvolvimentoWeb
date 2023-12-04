import { ReactNode } from "react";
import { Header } from "../components/Header";
import { LayoutContainer, MainDiv } from "./styles";

interface LayoutDefaultProps {
  children: ReactNode
}

export function LayoutDefault({children}: LayoutDefaultProps) {
  return (
    <LayoutContainer>
      <Header></Header>
      <MainDiv>{children}</MainDiv>
    </LayoutContainer>
  )
}