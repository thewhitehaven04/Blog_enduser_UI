import {
  type UseQueryResult,
} from '@tanstack/react-query'
import { type TGetPostCommentsResponseDto } from 'Client/postComments/types/responses'

export type TUseCommentsResult = UseQueryResult<
  TGetPostCommentsResponseDto,
  Error
>
