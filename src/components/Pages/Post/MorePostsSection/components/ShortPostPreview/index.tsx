import type { IFormattedPostDto } from 'Client/posts/types/responses'
import { withLoadingOnFetch } from 'Components/HOC/WithLoadingOnFetch'
import * as SC from './styles'
import { type IShortPostProps } from 'Pages/Post/MorePostsSection/components/ShortPostPreview/types'

function ShortPostPreview({
  postId,
  title,
  summary
}: IShortPostProps): JSX.Element {
  return (
    <SC.LinkWrapper to={`/post/${postId}/comments`}>
      <SC.ShortPostWrapper>
        <SC.PostTitle>{title}</SC.PostTitle>
        <SC.PostSummary>{summary}</SC.PostSummary>
      </SC.ShortPostWrapper>
    </SC.LinkWrapper>
  )
}

export const LoadedPostList = withLoadingOnFetch<IFormattedPostDto[]>(
  (props) => (
    <>
      {props.value.map(({ id, title, summary }) => (
        <ShortPostPreview key={id} title={title} summary={summary} postId={id} />
      ))}
    </>
  )
)

