import { Button } from 'Components/Button/styles'
import { Column } from 'Components/Common/Styles/Column/styles'
import { MainPane } from 'Components/Common/Styles/MainPane/styles'
import { usePagination } from 'Hooks/pagination'
import { usePosts } from 'Hooks/queries/posts'
import { LoadedPostPreviewSection } from 'Pages/Posts/PostPreview'

export function PostsPage(): JSX.Element {
  const [paginationParams, setPaginationParams] = usePagination()
  const defaultPostCountIncrement = 10
  const posts = usePosts(paginationParams, defaultPostCountIncrement)

  const { data, isSuccess } = posts
  const postCount = isSuccess ? data.pagination.count : 0
  const hasMorePosts =
    isSuccess &&
    data.pagination.totalCount >= postCount + defaultPostCountIncrement

  const handleLoadMore = (): void => {
    setPaginationParams((oldPagination) => {
      return {
        ...oldPagination,
        count: paginationParams.count + defaultPostCountIncrement 
      }
    })
  }

  return (
    <Column $alignment='center'>
      <MainPane>
        <LoadedPostPreviewSection {...posts} />
      </MainPane>
      {hasMorePosts && (
        <Button type='button' onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </Column>
  )
}
