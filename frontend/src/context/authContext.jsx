import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(false)
  const [user, setUser] = useState([])
  const [modal, setModal] = useState(false)

  return (
    <UserContext.Provider
      value={{ token, setToken, user, setUser, modal, setModal }}
    >
      {children}
    </UserContext.Provider>
  )
}
export const UserAuth = () => {
  return useContext(UserContext)
}
