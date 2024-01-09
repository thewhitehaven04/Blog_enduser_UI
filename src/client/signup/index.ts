import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import { type ISignUpRequestDto } from 'Client/signup/types/request'

export class SignUpClient extends BaseApiClient {
  async postSignup(data: ISignUpRequestDto): Promise<Response> {
    return await this.request('POST', 'signup', {}, data)
  }
}

export const SignupClientInstance = new SignUpClient(appConfig.apiRootUrl)

