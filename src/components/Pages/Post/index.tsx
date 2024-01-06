import { CommentSection } from 'Pages/Post/CommentSection'
import { PostSection } from 'Pages/Post/PostSection'
import { useParams } from 'react-router-dom'

export function PostPage(): JSX.Element {
  const { postId } = useParams<'postId'>()

  return (
    <>
      <PostSection postId={postId ?? ''} />
      <CommentSection postId={postId ?? ''} />
    </>
  )
}
