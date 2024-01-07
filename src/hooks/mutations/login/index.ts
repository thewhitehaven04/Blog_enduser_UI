import { useMutation } from '@tanstack/react-query'
import { AuthClientInstance } from 'Client/auth'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import { type IAuthResponseDto } from 'Client/auth/types/response'
import { type IUserContext } from 'Context/user/types'
import { useSetUserContext } from 'Hooks/context/setUser'
import { type TUseLoginResult } from 'Hooks/mutations/login/types'
import { storeAccessToken } from 'Service/accessToken'
import { jwtDecode } from 'jwt-decode'

export function useLogin(): TUseLoginResult {
  const mutation = useMutation<IAuthResponseDto, Error, IAuthRequestDto>({
    mutationFn: async (loginData) =>
      await AuthClientInstance.auth(loginData).then(
        async (res) => await (res.json() as Promise<IAuthResponseDto>)
      ),
    mutationKey: ['login']
  })

  const { isSuccess, data } = mutation
  const setUser = useSetUserContext()

  if (isSuccess) {
    storeAccessToken(data.token)
    setUser(jwtDecode<IUserContext>(data.token))
  }

  return mutation
}
