import * as SC from './styles'
import { type IShortPostProps } from 'Pages/Post/ShortPostPreview/types'

export function ShortPostPreview({
  postId,
  title,
  summary
}: IShortPostProps): JSX.Element {
  return (
    <SC.Wrapper>
      <SC.TitleWithLink to={`/post/${postId}/comments`}>
        {title}
      </SC.TitleWithLink>
      <SC.PostSummary>{summary}</SC.PostSummary>
    </SC.Wrapper>
  )
}
