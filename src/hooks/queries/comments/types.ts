import {
  type UseQueryResult,
} from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { type ITransformedCommentDto } from 'Client/postComments/types/responses'

export type TUseCommentsResult = UseQueryResult<
  ISuccessfulPaginatedResponse<ITransformedCommentDto>, 
  Error
>
