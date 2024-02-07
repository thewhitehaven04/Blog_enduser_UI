import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { PostsClientInstance } from 'Client/posts'
import { type TGetReadMoreResponse } from 'Client/posts/types/responses'

export const ReadMoreKey = ({
  postId
}: {
  postId: string
}): [string, string] => ['readMore', postId]

export function useReadMore(
  postId: string
): UseQueryResult<TGetReadMoreResponse, Error> {
  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getReadMore(postId).then(
        async (response) => (await response.json()) as TGetReadMoreResponse
      ),
    queryKey: ReadMoreKey({ postId })
  })
}
