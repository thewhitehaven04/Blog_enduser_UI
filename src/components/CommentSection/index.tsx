import { QueryClientProvider, useQuery } from '@tanstack/react-query'
import { qc } from 'Client/index'
import { useParams } from 'react-router-dom'

export const CommentSection = (): JSX.Element => {
  const { id } = useParams<'id'>()

  const { isError, isPending, data } = useQuery({
    queryFn: () =>
      fetch(`localhost:3000/posts/${id}/comment`).then(
        (res) => res.json() as Promise<{ text: string }[]>
      ),
    queryKey: ['comments']
  })

  if (isPending) {
    return <span>Waiting for comments to load</span>
  }

  if (isError) {
    return <span>kek</span>
  }

  return (
    <QueryClientProvider client={qc}>
      <span>comments</span>
      <ul>
        {data.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>
    </QueryClientProvider>
  )
}
