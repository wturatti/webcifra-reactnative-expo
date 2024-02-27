import React, { createContext, useState } from 'react'
import { LoginService } from '../data/services/login'
import {ToastAndroid} from 'react-native';

type AuthContextType = {
  login: (email: string, passowrd: string) => void
  logout: () => void
  isLoading: boolean
  userToken: any
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userToken, setUserToken] = useState<any>(null)
  const loginService = new LoginService()

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    const {access_token} = await loginService.login({email: email, password: password})
    
    if (access_token != ''){
      setUserToken(access_token)    
    } else {
      ToastAndroid.show('Usuario e senha incorretos!', ToastAndroid.LONG);
    }
    
    setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)
    setUserToken(null)
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
}
