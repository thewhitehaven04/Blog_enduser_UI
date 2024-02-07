import { usePagination } from 'Hooks/pagination'
import { usePosts } from 'Hooks/queries/posts'
import { LoadedPostPreviewSection } from 'Pages/Posts/PostPreview'

export function PostsPage(): JSX.Element {
  const [pagination] = usePagination()
  const posts = usePosts(pagination)

  return <LoadedPostPreviewSection {...posts} />
}
