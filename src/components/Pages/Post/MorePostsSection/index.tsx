import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Flex/Row'
import { type IMorePostsProps } from 'Pages/Post/MorePostsSection/types'
import { useReadMore } from 'Pages/Post/MorePostsSection/hooks/queryReadMore'
import ShortPostPreviewList from './components/ShortPostPreview'

export function MorePostsSection({ postId }: IMorePostsProps): JSX.Element {
  const posts = useReadMore(postId)

  return (
    <SC.SectionWrapper>
      <Row $justify='start'>
        <SC.SectionHeader>Read more</SC.SectionHeader>
      </Row>
      <SC.PostList>
        <ShortPostPreviewList {...posts}/>
      </SC.PostList>
    </SC.SectionWrapper>
  )
}
