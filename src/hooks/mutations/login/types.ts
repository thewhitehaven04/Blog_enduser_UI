import { type UseMutationResult } from '@tanstack/react-query'
import { type IAuthRequestDto } from 'Client/auth/types/request'
import { type IAuthResponseDto } from 'Client/auth/types/response'
import { type IDataResponse } from 'Client/base/types/responses'

export type TUseLoginResult = UseMutationResult<
  IDataResponse<IAuthResponseDto>,
  Error,
  IAuthRequestDto,
  unknown
>
