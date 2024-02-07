import { CommentSection } from 'Pages/Post/CommentSection'
import { MorePostsSection } from 'Pages/Post/MorePostsSection'
import { PostSection } from 'Pages/Post/PostSection'
import { useParams } from 'react-router-dom'
import * as SC from './styles'
import { MainPane } from 'Components/Common/Styles/MainPane/styles'

export function PostPage(): JSX.Element {
  const { postId = '' } = useParams<'postId'>()

  return (
    <SC.PostPageWrapper>
      <MainPane>
        <PostSection postId={postId} />
        <CommentSection postId={postId} />
      </MainPane>
      <MorePostsSection postId={postId} />
    </SC.PostPageWrapper>
  )
}
