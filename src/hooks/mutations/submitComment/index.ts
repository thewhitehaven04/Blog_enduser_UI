import { type UseMutationResult, useMutation } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type IPostCommentBody } from 'Client/postComments/types/requests'
import { qc } from 'Client/query'

export function useSubmitComment(
  postId: string
): UseMutationResult<any, Error, IPostCommentBody, unknown> {
  return useMutation<any, Error, IPostCommentBody>({
    mutationFn: async (comment) =>
      await CommentClientInstance.postComment(postId, comment),
    mutationKey: ['submitComment', postId],
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['comments', postId] })
    }
  })
}
