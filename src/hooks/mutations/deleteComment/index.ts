import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type TGetPostCommentsResponseDto } from 'Client/postComments/types/responses'
import type { TUseDeleteCommentResult } from 'Hooks/mutations/deleteComment/types'
import { usePagination } from 'Hooks/pagination'
import { CommentsQueryKey } from 'Hooks/queries/comments'
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
    onSuccess: ({ success }, { commentId }) => {
      queryClient.setQueryData<TGetPostCommentsResponseDto>(
        CommentsQueryKey({ postId, params: pagination }),
        (commentListData) => {
          if (success) {
            return produce(commentListData, (draft) => {
              if (draft?.success === true) {
                draft.data = draft.data.filter(
                  (comment) => comment._id !== commentId
                )
              }
            })
          }
        }
      )
    }
  })
}
