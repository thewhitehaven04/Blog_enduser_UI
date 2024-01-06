import { withLoadingOnFetch } from 'Components/HOC/WithLoadingOnFetch'
import { type IPostProps } from 'Pages/Post/PostSection/Post/types'
import * as SC from './styles'
import { Column } from 'Components/Common/Column/styles'
import { type IFormattedPostDto } from 'Client/posts/types/responses'
import { toRelativeDate } from 'Pages/Post/CommentSection/Comment/helpers'

function PostView({ title, author, text, published }: IPostProps): JSX.Element {
  return (
    <Column $alignment='center'>
      <SC.PostTitle>{title}</SC.PostTitle>
      <SC.PostPublished>
        By {author.username}, {toRelativeDate(published)}
      </SC.PostPublished>
        <SC.PostText dangerouslySetInnerHTML={{ __html: text }} />
    </Column>
  )
}

export const LoadedPost = withLoadingOnFetch<IFormattedPostDto>((props) => (
  <PostView
    text={props.value.text}
    title={props.value.title}
    author={props.value.author}
    published={props.value.published}
  />
))
