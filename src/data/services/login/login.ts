import apiRailWay from '../../../core/services/api-railway'
import { Login } from '../../../domain/interfaces/login'

export class LoginService implements Login {
  async login(params: Login.Params): Promise<Login.Result> {
    try {
      const { data } = await apiRailWay.post<Login.Result>('auth', {
        email: params.email,
        password: params.password,
      })
      return data
    } catch (error) {
      return {
        access_token: '',
      }
    }
  }
}
