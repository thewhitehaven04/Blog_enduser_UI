import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import {
  type TGetPostCommentsResponseDto,
  type TPostCommentResponseDto
} from 'Client/postComments/types/responses'
import { type TUseSubmitCommentResult } from 'Hooks/mutations/submitComment/types'
import { usePagination } from 'Hooks/pagination'
import { CommentsQueryKey } from 'Hooks/queries/comments'
import { produce } from 'immer'

export function useSubmitComment(): TUseSubmitCommentResult {
  const queryClient = useQueryClient()
  const [pagination] = usePagination()

  return useMutation<TPostCommentResponseDto, Error, IPostCommentBody>({
    mutationFn: async (commentData) =>
      await CommentClientInstance.postComment(commentData).then(
        async (res) => (await res.json()) as TPostCommentResponseDto
      ),
    mutationKey: ['submitComment'],
    onSuccess: (commentResponse, { postId }) => {
      queryClient.setQueryData<TGetPostCommentsResponseDto>(
        CommentsQueryKey({ postId, params: pagination }),
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
          throw new Error(`No comment data for the post ${postId}`)
        }
      )
    }
  })
}
