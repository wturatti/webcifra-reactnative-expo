import { useContext } from 'react'
import { Loading } from '../components/Loading'
import { AuthContext } from '../context'
import { Login } from '../pages/Login'
import AuthenticateRoutes from './AuthenticateRoutes'

export const Routes = () => {
  const { isLoading, userToken } = useContext(AuthContext)

  if (isLoading) {
    return <Loading />
  }

  return <>{userToken === null ? <Login /> : <AuthenticateRoutes />}</>
}
