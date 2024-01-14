import {
  type ITransformedCommentDto,
} from 'Client/postComments/types/responses'
import { Comment } from 'Pages/Post/CommentSection/Comment'
import { type ICommentListProps } from 'Pages/Post/CommentSection/CommentList/types'
import { withLoadingOnPageFetch } from 'Components/HOC/WithLoadingOnInfiniteFetch'

function CommentList({ page }: ICommentListProps): JSX.Element {
  return (
    <>
      {page.map((commentData, index) => (
        <Comment
          key={index}
          {...commentData}
          author={commentData.author.username}
        />
      ))}
    </>
  )
}

export const LoadedCommentList = withLoadingOnPageFetch<ITransformedCommentDto>(
  (props) => <CommentList page={props} />
)
