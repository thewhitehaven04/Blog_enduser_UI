import { QueryError } from 'Components/Common/QueryError'
import { usePagination } from 'Hooks/pagination'
import { useComments } from 'Hooks/queries/comments'
import { useParams } from 'react-router-dom'

export function CommentSection(): JSX.Element {
  const { postId } = useParams<'postId'>()
  const paginationParams = usePagination()

  const { isPending, isError, error } = useComments(
    postId ?? '',
    paginationParams
  )

  if (isPending) {
    return <span>Waiting for comments to load</span>
  }

  if (isError) {
    return <QueryError errorText={error.message} />
  }

  return (
    <>
      <span>comments</span>
      <ul>
        {data.data.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>
    </>
  )
}
