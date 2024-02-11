import { type UseMutationResult } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { type ISignUpRequestDto } from 'Client/signup/types/request'

export type TUseSignupResult = UseMutationResult<
  TGenericResponse,
  Error,
  ISignUpRequestDto,
  unknown
>
