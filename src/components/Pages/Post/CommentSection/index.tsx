import { usePagination } from 'Hooks/pagination'
import { useComments } from 'Hooks/queries/comments'
import { LoadedCommentList } from './CommentList'
import { type ICommentSectionProps } from 'Pages/Post/CommentSection/types'

export function CommentSection({ postId }: ICommentSectionProps): JSX.Element {
  const paginationParams = usePagination()

  const query = useComments(postId ?? '', paginationParams)

  return <LoadedCommentList {...query} />
}
