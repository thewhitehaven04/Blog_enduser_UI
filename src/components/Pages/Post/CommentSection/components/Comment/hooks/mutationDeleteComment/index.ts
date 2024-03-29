import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  type ISuccessfulPaginatedResponse,
  type TGenericResponse
} from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type ITransformedCommentDto } from 'Client/postComments/types/responses'
import type { TUseDeleteCommentResult } from 'Pages/Post/CommentSection/components/Comment/hooks/mutationDeleteComment/types'
import { usePagination } from 'Hooks/pagination'
import { CommentsQueryKey } from 'Pages/Post/CommentSection/hooks/queryComments'
import { produce } from 'immer'

export function useDeleteComment(postId: string): TUseDeleteCommentResult {
  const queryClient = useQueryClient()
  const [pagination] = usePagination()

  return useMutation<TGenericResponse, Error, { commentId: string }>({
    mutationFn: async ({ commentId }) =>
      await CommentClientInstance.deleteComment(commentId).then(
        async (response) => await response.json()
      ),
    mutationKey: ['deleteComment'],
    onSuccess: (deleteResponse, { commentId }) => {
      queryClient.setQueryData<
        ISuccessfulPaginatedResponse<ITransformedCommentDto>
      >(CommentsQueryKey({ postId, params: pagination }), (comments) => {
        if (comments != null && deleteResponse.success) {
          return produce(comments, (draft) => {
            draft.data = draft.data.filter(
              (comment) => comment._id !== commentId
            )
          })
        }
      })
    },
  })
}
