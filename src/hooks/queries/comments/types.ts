import {
  type UseQueryResult,
  type InfiniteData,
  type UseInfiniteQueryResult
} from '@tanstack/react-query'
import { type TGetPostCommentsResponseDto } from 'Client/postComments/types/responses'

export type TUseAccumulatedQueryResult<T, K = unknown> = UseInfiniteQueryResult<
  InfiniteData<T, K>,
  Error
> & { accumulatedPage?: T }

export type TUseCommentsResult = UseQueryResult<
  TGetPostCommentsResponseDto,
  Error
>
