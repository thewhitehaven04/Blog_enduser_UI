import { usePost } from 'Pages/Post/PostSection/hooks/queryPost'
import { LoadedPost } from 'Pages/Post/PostSection/Post'
import { type IPostSectionProps } from 'Pages/Post/PostSection/types'

export function PostSection({ postId }: IPostSectionProps): JSX.Element {
  const post = usePost(postId)

  return <LoadedPost {...post} />
}
