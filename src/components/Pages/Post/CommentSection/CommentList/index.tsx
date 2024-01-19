import {
  type ITransformedCommentDto
} from 'Client/postComments/types/responses'
import { withLoadingOnFetch } from 'Components/HOC/WithLoadingOnFetch'
import { Comment } from 'Pages/Post/CommentSection/Comment'

function CommentList({
  data
}: {
  data: ITransformedCommentDto[]
}): JSX.Element {
  return (
    <>
      {data.map((comment) => (
        <Comment
          key={comment._id}
          {...comment}
          author={comment.author.username}
        />
      ))}
    </>
  )
}

export const LoadedCommentList = withLoadingOnFetch<ITransformedCommentDto[]>(
  (props) => <CommentList data={props.value} />
)
