import { ReactNode, useContext, useEffect } from "react";
import { LayoutDefault } from "../../layouts/LayoutDefault";
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

interface RouteLayoutProps {
  page: ReactNode
  withLayout: boolean
}

export function RouteLayout({ page, withLayout }: RouteLayoutProps) {
  const { isUserLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (withLayout && !isUserLoggedIn) {
  //     navigate("/login")
  //   }
  // }, [])

  if (withLayout) {
    return (
      <LayoutDefault>
        {page}
      </LayoutDefault>
    )
  }
  return (
    <>
      {page}
    </>
  )
}