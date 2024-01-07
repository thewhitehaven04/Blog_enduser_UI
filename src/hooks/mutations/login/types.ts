import { type UseMutationResult } from '@tanstack/react-query'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import { type IAuthResponseDto } from 'Client/auth/types/response'

export type TUseLoginResult = UseMutationResult<
  IAuthResponseDto,
  Error,
  IAuthRequestDto,
  unknown
>
