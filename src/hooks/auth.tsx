import React, { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

const AuthContext = createContext({})

interface AuthProviderProps {
  children: React.ReactNode
}

interface SignInProps {
  email: string
  password: string
}

interface User {
  id: number
  name: string
  email: string
  role: string
}

interface AuthData {
  user?: User
  token?: string
}

interface AuthContextType {
  signIn: ({email, password}: SignInProps) => Promise<void>
  signOut: () => void
  user?:User
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthData>({})



  async function signIn({ email, password }: SignInProps){

    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token} = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)
      
      api.defaults.headers.common['Authorization'] = `Bearer ${ token }`
      
      setData({ user , token })

    } catch (error: any){
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }

  }

  function signOut(){

    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")

    setData({})

  }
  
  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const userStr = localStorage.getItem("@foodexplorer:user")

    if ( token && userStr) {
      api.defaults.headers.common['Authorization'] = `Bearer ${ token }`
      
      try {
        const user =JSON.parse(userStr)
        setData({ token, user})
      } catch (error) {
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')
        setData({})
        console.error("Erro ao analisar dados do usuário no localStorage", error)
      }
    }
  }, [])


  return(
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext) as AuthContextType
  return context
}


export { AuthProvider, useAuth }