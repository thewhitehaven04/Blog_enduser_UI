import { useMutation } from '@tanstack/react-query'
import { AuthClientInstance } from 'Client/auth'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import { type IAuthResponseDto } from 'Client/auth/types/response'
import type {
  ISuccessfulResponse,
  TGenericResponse
} from 'Client/base/types/responses'
import { type TUseLoginResult } from 'Components/Modals/Login/LoginForm/hooks/mutateLogin/types'
import { LOGIN_ERROR_MSG } from './constants'
import { useUserDispatchContext } from 'Components/Layout/components/UserContextProvider/hooks/contextUser'

export function useLogin(): TUseLoginResult {
  const { handleLogin } = useUserDispatchContext()

  return useMutation<
    ISuccessfulResponse<IAuthResponseDto>,
    Error,
    IAuthRequestDto
  >({
    mutationFn: async (loginData) => {
      const response = (await (
        await AuthClientInstance.auth(loginData)
      ).json()) as TGenericResponse<IAuthResponseDto>
      if (response.success) {
        return response
      }

      throw new Error(LOGIN_ERROR_MSG)
    },
    mutationKey: ['login'],
    onSuccess: ({ data }) => {
      handleLogin(data.token)
    }
  })
}
