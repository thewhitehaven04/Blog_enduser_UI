import { usePagination } from 'Hooks/pagination'
import { LoadedCommentList } from './CommentList'
import { type ICommentSectionProps } from 'Pages/Post/CommentSection/types'
import { InlineLoading } from 'Components/Common/InlineLoading'
import { useComments } from 'Hooks/queries/comments'
import * as SC from './styles'
import { AddCommentSubsection } from 'Pages/Post/CommentSection/AddCommentSubsection'

export function CommentSection({ postId }: ICommentSectionProps): JSX.Element {
  const paginationParams = usePagination()

  const query = useComments(postId ?? '', paginationParams)
  const { isFetchingNextPage, hasNextPage, fetchNextPage, status, data } = query

  const handleClick = async (): Promise<void> => await fetchNextPage()

  const commentCount =
    status === 'success' && data.pages[0].success ? data.pages[0].data.count : 0

  return (
    <>
      <SC.SectionHeader>{commentCount} comments</SC.SectionHeader>
      <AddCommentSubsection />
      <SC.CommentListWrapper>
        <LoadedCommentList {...query} />
      </SC.CommentListWrapper>
      {isFetchingNextPage && (
        <InlineLoading loadingText='Loading more comments' />
      )}
      {hasNextPage && (
        <button type='button' onClick={handleClick}>
          Load more comments
        </button>
      )}
    </>
  )
}
