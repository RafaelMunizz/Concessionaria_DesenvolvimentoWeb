import { ReactNode, createContext, useState } from 'react'

interface AuthContextType {
  userId: number | null
  isUserLoggedIn: boolean
  changeUserId: (id: number) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userId, setUserId] = useState<number | null>(null)

  const isUserLoggedIn = userId ? true : false

  function changeUserId(id: number) {
    setUserId(id)
  }

  return (
    <AuthContext.Provider value={{ userId, isUserLoggedIn, changeUserId }}>
      {children}
    </AuthContext.Provider>
  )
}

