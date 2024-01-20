import * as SC from './styles'
import { type IShortPostProps } from 'Pages/Post/ShortPostPreview/types'

export function ShortPostPreview({
  postId,
  title,
  text
}: IShortPostProps): JSX.Element {
  return (
    <SC.Wrapper>
      <SC.TitleWithLink to={`/post/${postId}/comments`}>
        {title}
      </SC.TitleWithLink>
      <SC.PostText dangerouslySetInnerHTML={{ __html: text }} />
    </SC.Wrapper>
  )
}
