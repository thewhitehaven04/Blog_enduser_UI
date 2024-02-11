import type { UseMutationResult } from '@tanstack/react-query'
import type { TGenericResponse } from 'Client/base/types/responses'

export type TUseDeleteCommentResult = UseMutationResult<
  TGenericResponse,
  Error,
  {
    commentId: string
  }
>
