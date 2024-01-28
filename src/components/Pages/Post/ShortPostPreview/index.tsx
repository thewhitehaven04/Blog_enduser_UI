import * as SC from './styles'
import { type IShortPostProps } from 'Pages/Post/ShortPostPreview/types'

export function ShortPostPreview({
  postId,
  title,
  summary
}: IShortPostProps): JSX.Element {
  return (
    <SC.LinkWrapper to={`/post/${postId}/comments`}>
      <SC.ShortPostWrapper>
        <SC.PostTitle>{title}</SC.PostTitle>
        <SC.PostSummary>{summary}</SC.PostSummary>
      </SC.ShortPostWrapper>
    </SC.LinkWrapper>
  )
}
