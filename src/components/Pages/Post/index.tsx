import { CommentSection } from 'Pages/Post/CommentSection'
import { MorePostsSection } from 'Pages/Post/MorePostsSection'
import { PostSection } from 'Pages/Post/PostSection'
import { useParams } from 'react-router-dom'
import * as SC from './styles'

export function PostPage(): JSX.Element {
  const { postId = '' } = useParams<'postId'>()

  return (
    <SC.PostPageWrapper>
      <SC.PostPageColumnWrapper>
        <PostSection postId={postId} />
        <CommentSection postId={postId} />
      </SC.PostPageColumnWrapper>
      <MorePostsSection postId={postId} />
    </SC.PostPageWrapper>
  )
}
