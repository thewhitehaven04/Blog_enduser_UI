import { Row } from 'Components/Common/Styles/Row/styles'
import { toRelativeDate } from 'Pages/Post/CommentSection/Comment/helpers'
import { type ICommentProps } from 'Pages/Post/CommentSection/Comment/types'
import * as SC from './styles'

export function Comment({ author, text, created }: ICommentProps): JSX.Element {
  return (
    <SC.CommentWrapper>
      <Row $alignment='center'>
        <SC.AuthorName>{author}</SC.AuthorName>
        <SC.CommentDate>{toRelativeDate(created)}</SC.CommentDate>
      </Row>
      <SC.CommentText>{text}</SC.CommentText>
    </SC.CommentWrapper>
  )
}
