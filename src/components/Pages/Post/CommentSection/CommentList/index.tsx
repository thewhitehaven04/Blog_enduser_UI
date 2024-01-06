import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { Comment } from 'Pages/Post/CommentSection/Comment'
import { type ICommentListProps } from 'Pages/Post/CommentSection/CommentList/types'
import * as SC from './styles'
import { withLoadingOnPageFetch } from 'Components/HOC/WithLoadingOnRepeatedFetch'

function CommentList({ value }: ICommentListProps): JSX.Element {
  return (
    <>
      <SC.CommentList $alignment='start'>
        {value.comments.map((commentData, index) => (
          <Comment
            key={index}
            {...commentData}
            author={commentData.author.username}
          />
        ))}
      </SC.CommentList>
    </>
  )
}

export const LoadedCommentList =
  withLoadingOnPageFetch<ITransformedCommentDataDto>((props) => (
    <CommentList value={props.pageEntry} />
  ))
