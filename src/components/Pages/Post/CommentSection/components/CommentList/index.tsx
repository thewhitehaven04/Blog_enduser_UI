import { type ITransformedCommentDto } from 'Client/postComments/types/responses'
import { withLoadingOnInitialFetch } from 'Components/HOC/WithLoadingOnFetch'
import { Comment } from 'Pages/Post/CommentSection/components/Comment'

function CommentList({
  data
}: {
  data: ITransformedCommentDto[]
}): JSX.Element {
  return (
    <>
      {data.map(({ _id, author: { username }, post, ...rest }) => (
        <Comment {...rest} key={_id} id={_id} author={username} postId={post} />
      ))}
    </>
  )
}

export const LoadedCommentList = withLoadingOnInitialFetch<
  ITransformedCommentDto[]
>((props) => <CommentList data={props.value} />)
