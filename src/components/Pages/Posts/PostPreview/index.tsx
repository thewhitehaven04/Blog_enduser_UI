import type { IPostPreviewProps } from 'Pages/Posts/PostPreview/types'
import * as SC from './styles'
import { getPostLink } from 'Pages/Posts/PostPreview/helpers'
import { withLoadingOnInitialFetch } from 'Components/HOC/WithLoadingOnFetch'
import type { IFormattedPostDto } from 'Client/posts/types/responses'

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
        {published}, by {author}
      </SC.PostPreviewPublished>
      <SC.PostPreviewText dangerouslySetInnerHTML={{ __html: text }} />
    </SC.PostPreviewWrapper>
  )
}

export const LoadedPostPreviewSection = withLoadingOnInitialFetch<IFormattedPostDto[]>(
  ({ value }) =>
    value.map(({ author: { username }, ...rest }) => (
      <PostPreview key={rest.id} {...rest} author={username} />
    ))
)
