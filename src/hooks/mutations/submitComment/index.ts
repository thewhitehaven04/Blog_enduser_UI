import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import {
  type TGetPostCommentsResponseDto,
  type TPostCommentResponseDto
} from 'Client/postComments/types/responses'
import { type TUseSubmitCommentResult } from 'Hooks/mutations/submitComment/types'
import { usePagination } from 'Hooks/pagination'
import { produce } from 'immer'

export function useSubmitComment(postId: string): TUseSubmitCommentResult {
  const queryClient = useQueryClient()
  const [pagination] = usePagination()

  return useMutation<TPostCommentResponseDto, Error, IPostCommentBody>({
    mutationFn: async (comment) =>
      await CommentClientInstance.postComment(postId, comment).then(
        async (res) => (await res.json()) as TPostCommentResponseDto
      ),
    mutationKey: ['submitComment', postId],
    onSuccess: (commentResponse) => {
      queryClient.setQueryData<TGetPostCommentsResponseDto>(
        ['comments', postId, pagination],
        (data) => {
          if (commentResponse.success) {
            if (data != null) {
              return produce(data, (draft) => {
                if (draft?.success && commentResponse.success) {
                  draft.pagination.totalCount += 1
                  draft.data.unshift(commentResponse.data)
                }
              })
            }
          }
          throw new Error('No prior comment data')
        }
      )
    }
  })
}
