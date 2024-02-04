import type { UseMutateFunction } from '@tanstack/react-query'
import type { TGenericResponse } from 'Client/base/types/responses'
import type { IPatchCommentBody } from 'Client/postComments/types/requests'
import type { TUpdateCommentResponseDto } from 'Client/postComments/types/responses'
import type { PropsWithChildren } from 'react'

export interface ICommentMutationContextProviderProps
  extends PropsWithChildren {
  postId: string
}

export interface ICommentMutationContext {
  deleteComment: UseMutateFunction<
    TGenericResponse,
    Error,
    {
      commentId: string
    },
    unknown
  >
  updateComment: UseMutateFunction<
    TUpdateCommentResponseDto,
    Error,
    { commentId: string; body: IPatchCommentBody },
    unknown
  >
}
