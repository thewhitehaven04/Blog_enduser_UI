import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import { type IFormattedPostDto } from 'Client/posts/types/responses'

export function usePost(
  postId: string
): UseQueryResult<IDataResponse<IFormattedPostDto>, Error> {
  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getPost(postId).then(
        async (res) => (await res.json()) as IFormattedPostDto
      ),
    queryKey: ['post', postId]
  })
}
