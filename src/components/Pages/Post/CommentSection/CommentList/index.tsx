import { type ITransformedCommentDto } from 'Client/postComments/types/responses'
import { withLoadingOnInitialFetch } from 'Components/HOC/WithLoadingOnFetch'
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
          id={comment._id}
          {...comment}
          author={comment.author.username}
        />
      ))}
    </>
  )
}

export const LoadedCommentList = withLoadingOnInitialFetch<
  ITransformedCommentDto[]
>((props) => <CommentList data={props.value} />)
