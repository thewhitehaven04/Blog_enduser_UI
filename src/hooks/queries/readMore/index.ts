import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { PostsClientInstance } from 'Client/posts'
import { type TGetReadMoreResponse } from 'Client/posts/types/responses'
import { useParams } from 'react-router'

export function useReadMore(): UseQueryResult<TGetReadMoreResponse, Error> {
  const { id } = useParams<'id'>()

  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getReadMore(id ?? '').then(
        async (response) => (await response.json()) as TGetReadMoreResponse
      ),
    queryKey: ['readMore', id]
  })
}
