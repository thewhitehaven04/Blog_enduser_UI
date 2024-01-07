import appConfig from '@/appConfig'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import BaseApiClient from 'Client/base'

export default class AuthClient extends BaseApiClient {
  async auth(
    loginData: IAuthRequestDto
  ): Promise<Response> {
    return await this.request(
      'POST',
      'login/authenticate',
      {},
      loginData
    )
  }
}

export const AuthClientInstance = new AuthClient(appConfig.apiRootUrl) 