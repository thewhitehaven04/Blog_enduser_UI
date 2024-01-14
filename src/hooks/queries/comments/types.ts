import { type UseInfiniteQueryResult } from '@tanstack/react-query'
import { type ITransformedCommentDto } from 'Client/postComments/types/responses'

export interface IInfiniteCommentData {
  count: number
  pages: ITransformedCommentDto[][]
}

export type TUseCommentsResult = UseInfiniteQueryResult<
  IInfiniteCommentData,
  Error
>
