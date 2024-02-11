import { usePagination } from 'Hooks/pagination'
import { LoadedCommentList } from './components/CommentList'
import { type ICommentSectionProps } from 'Pages/Post/CommentSection/types'
import { InlineLoading } from 'Components/Common/InlineLoading'
import { useComments } from 'Pages/Post/CommentSection/hooks/queryComments'
import * as SC from './styles'
import { AddCommentSubsection } from 'Pages/Post/CommentSection/components/AddCommentForm'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { Column } from 'Components/Common/Styles/Column'
import { getCommentCountString } from 'Pages/Post/CommentSection/utils'

export function CommentSection({ postId }: ICommentSectionProps): JSX.Element {
  /** default pagination */
  const [paginationParams, setPaginationParams] = usePagination()
  const defaultIncrement = 10

  const query = useComments(postId, paginationParams, defaultIncrement)
  const { data, isSuccess, isRefetching } = query

  const commentCount = isSuccess && data.pagination.totalCount
  const hasNextButton =
    commentCount !== false && paginationParams.count < commentCount

  const handleLoadMoreClick = (): void => {
    setPaginationParams((oldPagination) => {
      return {
        ...oldPagination,
        count: paginationParams.count + defaultIncrement
      }
    })
  }

  return (
    <SC.Wrapper>
      <SC.SectionHeader>Join the discussion:</SC.SectionHeader>
      <span>
        {typeof commentCount === 'number' &&
          getCommentCountString(commentCount)}
      </span>
      <AddCommentSubsection postId={postId} />
      <SC.CommentListWrapper>
        <LoadedCommentList {...query} />
      </SC.CommentListWrapper>
      {hasNextButton && (
        <Column $alignment='start'>
          {isRefetching ? (
            <InlineLoading loadingText='Loading more comments' />
          ) : (
            <LinkLikeButton type='button' onClick={handleLoadMoreClick}>
              Load more comments
            </LinkLikeButton>
          )}
        </Column>
      )}
    </SC.Wrapper>
  )
}
