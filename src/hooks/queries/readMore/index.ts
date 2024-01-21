import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { PostsClientInstance } from 'Client/posts'
import { type TGetReadMoreResponse } from 'Client/posts/types/responses'

export function useReadMore(postId: string): UseQueryResult<TGetReadMoreResponse, Error> {
  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getReadMore(postId ?? '').then(
        async (response) => (await response.json()) as TGetReadMoreResponse
      ),
    queryKey: ['readMore', postId]
  })
}
