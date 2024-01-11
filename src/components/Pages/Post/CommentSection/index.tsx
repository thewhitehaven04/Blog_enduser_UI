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
  const paginationParams = usePagination()

  const query = useComments(postId ?? '', paginationParams)
  const { isFetchingNextPage, hasNextPage, fetchNextPage, status, data } = query

  const handleClick = async (): Promise<void> => await fetchNextPage()

  const commentCount =
    status === 'success' && data.pages[0].success ? data.pages[0].data.count : 0

  return (
    <SC.Wrapper>
      <SC.SectionHeader>{commentCount} comments</SC.SectionHeader>
      <AddCommentSubsection />
      <SC.CommentListWrapper>
        <LoadedCommentList {...query} />
      </SC.CommentListWrapper>
      {hasNextPage && (
        <Column $alignment='start'>
          {isFetchingNextPage ? (
            <InlineLoading loadingText='Loading more comments' />
          ) : (
            <LinkLikeButton type='button' onClick={handleClick}>
              Load more comments
            </LinkLikeButton>
          )}
        </Column>
      )}
    </SC.Wrapper>
  )
}
