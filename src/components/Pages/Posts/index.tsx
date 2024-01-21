import { usePagination } from 'Hooks/pagination'
import { usePosts } from 'Hooks/queries/posts'

export function PostsPage(): JSX.Element {
  const [pagination] = usePagination()
  const posts = usePosts(pagination)
  return <span>Under construction</span>
}