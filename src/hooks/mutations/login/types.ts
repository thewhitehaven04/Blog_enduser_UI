import { type UseMutationResult } from '@tanstack/react-query'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import { type IAuthResponseDto } from 'Client/auth/types/response'
import { type ISuccessfulResponse } from 'Client/base/types/responses'

export type TUseLoginResult = UseMutationResult<
  ISuccessfulResponse<IAuthResponseDto>,
  Error,
  IAuthRequestDto,
  unknown
>
