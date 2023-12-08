import { ReactNode } from "react";
import { LayoutDefault } from "../../layouts/LayoutDefault";

interface RouteLayoutProps {
  page: ReactNode
  withLayout: boolean
}

export function RouteLayout({ page, withLayout }: RouteLayoutProps) {
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