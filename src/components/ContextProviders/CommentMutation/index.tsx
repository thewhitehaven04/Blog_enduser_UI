import type { ICommentMutationContextProviderProps } from 'Components/ContextProviders/CommentMutation/types'
import { CommentMutationContext } from 'Hooks/context/commentMutation'
import { useDeleteComment } from 'Hooks/mutations/deleteComment'
import { useUpdateComment } from 'Hooks/mutations/updateComment'

export function CommentMutationContextProvider({
  postId,
  children
}: ICommentMutationContextProviderProps): JSX.Element {
  const { mutate: deleteComment } = useDeleteComment(postId)
  const { mutate: updateComment } = useUpdateComment(postId)

  return (
    <CommentMutationContext.Provider value={{ deleteComment, updateComment }}>
      {children}
    </CommentMutationContext.Provider>
  )
}
