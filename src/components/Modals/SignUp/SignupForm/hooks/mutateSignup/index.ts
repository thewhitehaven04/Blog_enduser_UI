import { useMutation } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { SignupClientInstance } from 'Client/signup'
import { type ISignUpRequestDto } from 'Client/signup/types/request'
import { type TUseSignupResult } from 'Components/Modals/SignUp/SignupForm/hooks/mutateSignup/types'

export function useSignup(): TUseSignupResult {
  return useMutation<TGenericResponse, Error, ISignUpRequestDto>({
    mutationFn: async (data) =>
      await SignupClientInstance.postSignup(data).then(
        async (res) => (await res.json()) as TGenericResponse
      ),
    mutationKey: ['signup']
  })
}
