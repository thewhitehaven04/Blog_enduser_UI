import type { IPostPreviewProps } from 'Pages/Posts/components/PostPreview/types'
import * as SC from './styles'
import { getPostLink } from 'Pages/Posts/components/PostPreview/helpers'
import { withLoadingOnFetch } from 'Components/HOC/WithLoadingOnFetch'
import type { IFormattedPostDto } from 'Client/posts/types/responses'
import { toRelativeDate } from 'Pages/Post/CommentSection/components/Comment/helpers'

function PostPreview({
  id,
  title,
  text,
  author,
  published
}: IPostPreviewProps): JSX.Element {
  return (
    <SC.PostPreviewWrapper>
      <SC.PostHeaderLink to={getPostLink(id)}>
        <SC.PostPreviewHeader>{title}</SC.PostPreviewHeader>
      </SC.PostHeaderLink>
      <SC.PostPreviewPublished>
        {toRelativeDate(published)}, by {author}
      </SC.PostPreviewPublished>
      <SC.PostPreviewText dangerouslySetInnerHTML={{ __html: text }} />
    </SC.PostPreviewWrapper>
  )
}

export const LoadedPostPreviewSection = withLoadingOnFetch<IFormattedPostDto[]>(
  ({ value }) =>
    value.map(({ author: { username }, ...rest }) => (
      <PostPreview key={rest.id} {...rest} author={username} />
    ))
)
