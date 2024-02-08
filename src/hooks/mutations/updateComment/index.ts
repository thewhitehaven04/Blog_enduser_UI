import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import type { IPatchCommentBody } from 'Client/postComments/types/requests'
import type {
  ITransformedCommentDto,
  TUpdateCommentResponseDto
} from 'Client/postComments/types/responses'
import type { TUseUpdateCommentResult } from 'Hooks/mutations/updateComment/types'
import { usePagination } from 'Hooks/pagination'
import { CommentsQueryKey } from 'Hooks/queries/comments'
import { useToasterEnqueue } from 'Hooks/toaster'
import { EToastType } from 'Hooks/context/toaster/types'
import { produce } from 'immer'

export function useUpdateComment(postId: string): TUseUpdateCommentResult {
  const queryClient = useQueryClient()
  const [pagination] = usePagination()
  const { enqueueToast } = useToasterEnqueue()

  return useMutation<
    TUpdateCommentResponseDto,
    Error,
    { commentId: string; body: IPatchCommentBody }
  >({
    mutationFn: async ({ commentId, body }) =>
      await CommentClientInstance.updateComment(commentId, body).then(
        async (response) =>
          await (response.json() as Promise<TUpdateCommentResponseDto>)
      ),
    mutationKey: ['updateComment'],
    onSuccess: (newCommentData, { commentId }) => {
      queryClient.setQueryData<
        ISuccessfulPaginatedResponse<ITransformedCommentDto>
      >(CommentsQueryKey({ postId, params: pagination }), (oldCommentData) => {
        enqueueToast({
          type: EToastType.ERROR,
          text: 'Unable to update comment'
        })
        if (oldCommentData != null) {
          return produce(oldCommentData, (draft) => {
            if (newCommentData.success) {
              const indexOfCommentToUpdate = draft.data.findIndex(
                (comment) => comment._id === commentId
              )
              draft.data[indexOfCommentToUpdate] = newCommentData.data
            }
          })
        }
      })
    }
  })
}
