import { Column } from 'Components/Common/Styles/Column/styles'
import { MainPane } from 'Components/Common/Styles/MainPane/styles'
import { usePagination } from 'Hooks/pagination'
import { usePosts } from 'Hooks/queries/posts'
import { LoadedPostPreviewSection } from 'Pages/Posts/PostPreview'

export function PostsPage(): JSX.Element {
  const [pagination] = usePagination()
  const posts = usePosts(pagination)

  return (
    <Column $alignment='center'>
      <MainPane>
        <LoadedPostPreviewSection {...posts} />
      </MainPane>
    </Column>
  )
}
