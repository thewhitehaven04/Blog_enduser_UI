import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { withLoadingOnFetch } from 'Components/HOC/WithLoadingOnFetch'
import { Comment } from 'Pages/Post/CommentSection/Comment'
import { type ICommentListProps } from 'Pages/Post/CommentSection/CommentList/types'
import * as SC from './styles'

function CommentList({ value }: ICommentListProps): JSX.Element {
  return (
    <>
      <section>
        <h2>{value.count} Comments</h2>
        <SC.CommentList $alignment='start'>
          {value.comments.map((commentData, index) => (
            <Comment
              key={index}
              {...commentData}
              author={commentData.author.username}
            />
          ))}
        </SC.CommentList>
      </section>
    </>
  )
}

export const LoadedCommentList = withLoadingOnFetch<ITransformedCommentDataDto>(
  (props) => <CommentList value={props.value} />
)
