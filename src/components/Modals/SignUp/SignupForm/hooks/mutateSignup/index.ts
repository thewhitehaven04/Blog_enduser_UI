import { useMutation } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { SignupClientInstance } from 'Client/signup'
import { type ISignUpRequestDto } from 'Client/signup/types/request'
import { type TUseSignupResult } from 'Components/Modals/SignUp/SignupForm/hooks/mutateSignup/types'
import { SIGNUP_ERROR_MSG } from './constants'

export function useSignup(): TUseSignupResult {
  return useMutation<TGenericResponse, Error, ISignUpRequestDto>({
    mutationFn: async (data) => {
      const response = await (await SignupClientInstance.postSignup(data)).json() as TGenericResponse
      
      if (response.success) {
        return response
      }

      throw new Error(SIGNUP_ERROR_MSG)
    },
    mutationKey: ['signup'],
  })
}
