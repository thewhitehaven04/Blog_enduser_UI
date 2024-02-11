import { type UseMutationResult } from '@tanstack/react-query'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import { type TPostCommentResponseDto } from 'Client/postComments/types/responses'

export type TUseSubmitCommentResult = UseMutationResult<
  TPostCommentResponseDto,
  Error,
  IPostCommentBody,
  unknown
>
