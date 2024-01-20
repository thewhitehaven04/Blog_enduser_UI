import { usePosts } from 'Hooks/queries/posts'
import * as SC from './styles'
import { type IPaginationParams } from 'Hooks/pagination/types'
import { type IMorePostsSectionProps } from 'Pages/Post/MorePostsSection/types'
import { LoadedPostList } from 'Pages/Post/ShortPostList'
import { Row } from 'Components/Common/Styles/Row/styles'

export function MorePostsSection({
  currentPost
}: IMorePostsSectionProps): JSX.Element {
  const postsShortPreviewPagination: IPaginationParams = { offset: 0, count: 4 }
  const posts = usePosts(postsShortPreviewPagination)

  console.log(currentPost)
  return (
    <SC.SectionWrapper>
      <Row $justify='start'>
        <SC.SectionHeader>Read more:</SC.SectionHeader>
      </Row>
      <SC.PostList>
        <LoadedPostList {...posts} />
      </SC.PostList>
    </SC.SectionWrapper>
  )
}
