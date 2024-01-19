import { usePagination } from 'Hooks/pagination'
import { LoadedCommentList } from './CommentList'
import { type ICommentSectionProps } from 'Pages/Post/CommentSection/types'
import { InlineLoading } from 'Components/Common/InlineLoading'
import { useComments } from 'Hooks/queries/comments'
import * as SC from './styles'
import { AddCommentSubsection } from 'Pages/Post/CommentSection/AddCommentForm'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { Column } from 'Components/Common/Styles/Column/styles'

export function CommentSection({ postId }: ICommentSectionProps): JSX.Element {
  /** default pagination */
  const [paginationParams, setPaginationParams] = usePagination()
  const defaultPageSize = paginationParams.count

  const query = useComments(postId ?? '', paginationParams)
  const { data, status, isRefetching } = query

  const commentCount =
    status === 'success' && data?.success && data?.pagination.totalCount
  const hasNextButton =
    commentCount !== false && paginationParams.count < commentCount

  const handleLoadMoreClick = (): void => {
    setPaginationParams((oldPagination) => {
      return {
        ...oldPagination,
        count: paginationParams.count + defaultPageSize
      }
    })
  }

  return (
    <SC.Wrapper>
      <SC.SectionHeader>{commentCount} comments</SC.SectionHeader>
      <AddCommentSubsection />
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
