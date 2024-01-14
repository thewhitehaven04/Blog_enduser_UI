import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import { type TPostCommentResponseDto } from 'Client/postComments/types/responses'
import { type TUseSubmitCommentResult } from 'Hooks/mutations/submitComment/types'
import {
  type IInfiniteCommentData
} from 'Hooks/queries/comments/types'

export function useSubmitComment(postId: string): TUseSubmitCommentResult {
  const queryClient = useQueryClient()

  return useMutation<TPostCommentResponseDto, Error, IPostCommentBody>({
    mutationFn: async (comment) =>
      await CommentClientInstance.postComment(postId, comment).then(
        async (res) => (await res.json()) as TPostCommentResponseDto
      ),
    mutationKey: ['submitComment', postId],
    onSuccess: (commentData) => {
      queryClient.setQueryData<IInfiniteCommentData>(
        ['comments', postId],
        (oldCommentsData) => {
          if (commentData.success) {
            return oldCommentsData != null
              ? {
                  count: oldCommentsData?.count + 1,
                  pages: [[commentData.data], ...oldCommentsData.pages]
                }
              : { count: 1, pages: [[commentData.data]] }
          }
          return oldCommentsData
        }
      )
    }
  })
}
