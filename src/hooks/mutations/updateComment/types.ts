import type { UseMutationResult } from '@tanstack/react-query'
import type { IPatchCommentBody } from 'Client/postComments/types/requests'
import type { TUpdateCommentResponseDto } from 'Client/postComments/types/responses'

export type TUseUpdateCommentResult = UseMutationResult<TUpdateCommentResponseDto, Error, {
  commentId: string;
  body: IPatchCommentBody;
}, unknown>
