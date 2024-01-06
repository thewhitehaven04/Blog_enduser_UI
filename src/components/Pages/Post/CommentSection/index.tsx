import { usePagination } from 'Hooks/pagination'
import { useInfiniteComments } from 'Hooks/queries/comments'
import { LoadedCommentList } from './CommentList'
import { type ICommentSectionProps } from 'Pages/Post/CommentSection/types'

export function CommentSection({ postId }: ICommentSectionProps): JSX.Element {
  const paginationParams = usePagination()

  const query = useInfiniteComments(postId ?? '', paginationParams)

  return (
    <>
      <LoadedCommentList {...query} />
      <button type='button' onClick={async () => await query.fetchNextPage()}>
        Load more comments
      </button>
      {query.isFetchingNextPage && <span>Loading additional comments...</span>}
    </>
  )
}
