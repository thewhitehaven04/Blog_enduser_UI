import { withLoadingOnInitialFetch } from 'Components/HOC/WithLoadingOnFetch'
import { type IPostProps } from 'Pages/Post/PostSection/Post/types'
import * as SC from './styles'
import { type IFormattedPostDto } from 'Client/posts/types/responses'
import { toRelativeDate } from 'Pages/Post/CommentSection/Comment/helpers'

function PostView({ title, author, text, published, summary }: IPostProps): JSX.Element {
  return (
    <SC.PostViewWrapper $alignment='center'>
      <SC.PostTitle>{title}</SC.PostTitle>
      <SC.PostPublished>
        By {author.username}, {toRelativeDate(published)}
      </SC.PostPublished>
      <SC.PostSummary>{summary}</SC.PostSummary>
      <SC.PostText dangerouslySetInnerHTML={{ __html: text }} />
    </SC.PostViewWrapper>
  )
}

export const LoadedPost = withLoadingOnInitialFetch<IFormattedPostDto>(
  ({ value }) => (
    <PostView
      text={value.text}
      summary={value.summary}
      title={value.title}
      author={value.author}
      published={value.published}
    />
  )
)
