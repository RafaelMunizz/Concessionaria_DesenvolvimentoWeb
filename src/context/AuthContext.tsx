import { ReactNode, createContext, useState } from 'react'

interface User {
  id: number
  funcao: number
}
interface AuthContextType {
  user: User | null
  isUserLoggedIn: boolean
  changeUser: (user: User) => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const isUserLoggedIn = user ? true : false

  function changeUser(user: User) {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user, isUserLoggedIn, changeUser }}>
      {children}
    </AuthContext.Provider>
  )
}

