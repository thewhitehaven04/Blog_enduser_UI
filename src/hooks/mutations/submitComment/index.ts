import { useMutation } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import { type TPostCommentResponseDto } from 'Client/postComments/types/responses'
import { queryClient } from 'Client/query'
import { type TUseSubmitCommentResult } from 'Hooks/mutations/submitComment/types'

export function useSubmitComment(postId: string): TUseSubmitCommentResult {
  return useMutation<TPostCommentResponseDto, Error, IPostCommentBody>({
    mutationFn: async (comment) =>
      await CommentClientInstance.postComment(postId, comment).then(
        async (res) => (await res.json()) as TPostCommentResponseDto
      ),
    mutationKey: ['submitComment', postId],
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['comments', postId] })
    }
  })
}
