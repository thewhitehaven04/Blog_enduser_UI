import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { Comment } from 'Pages/Post/CommentSection/Comment'
import { type ICommentListProps } from 'Pages/Post/CommentSection/CommentList/types'
import { withLoadingOnPageFetch } from 'Components/HOC/WithLoadingOnRepeatedFetch'

function CommentList({ value }: ICommentListProps): JSX.Element {
  return (
    <>
      {value.comments.map((commentData, index) => (
        <Comment
          key={index}
          {...commentData}
          author={commentData.author.username}
        />
      ))}
    </>
  )
}

export const LoadedCommentList =
  withLoadingOnPageFetch<ITransformedCommentDataDto>((props) => (
    <CommentList value={props.pageEntry} />
  ))
