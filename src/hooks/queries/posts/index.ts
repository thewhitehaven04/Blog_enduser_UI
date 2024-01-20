import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { PostsClientInstance } from 'Client/posts'
import { type IGetPostsRequestParamsDto } from 'Client/posts/types/requests'
import { type TGetPostsResponse } from 'Client/posts/types/responses'

export function usePosts(
  pagination: IGetPostsRequestParamsDto
): UseQueryResult<TGetPostsResponse, Error> {
  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getPosts(pagination).then(
        async (response) => (await response.json()) as TGetPostsResponse
      ),
    queryKey: ['posts', pagination],
  })
}
