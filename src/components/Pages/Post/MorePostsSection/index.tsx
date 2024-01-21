import * as SC from './styles'
import { LoadedPostList } from 'Pages/Post/ShortPostList'
import { Row } from 'Components/Common/Styles/Row/styles'
import { type IMorePostsProps } from 'Pages/Post/MorePostsSection/types'
import { useReadMore } from 'Hooks/queries/readMore'

export function MorePostsSection({ postId }: IMorePostsProps): JSX.Element {
  const posts = useReadMore(postId)

  return (
    <SC.SectionWrapper>
      <Row $justify='start'>
        <SC.SectionHeader>Read more</SC.SectionHeader>
      </Row>
      <SC.PostList>
        <LoadedPostList {...posts} />
      </SC.PostList>
    </SC.SectionWrapper>
  )
}
