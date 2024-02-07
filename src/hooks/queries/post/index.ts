import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type ISuccessfulResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import { type IFormattedPostDto } from 'Client/posts/types/responses'

export const PostQueryKey = ({ postId }: { postId: string }): string[] => [
  'post',
  postId
]

export function usePost(
  postId: string
): UseQueryResult<ISuccessfulResponse<IFormattedPostDto>, Error> {
  return useQuery({
    queryFn: async () =>
      await PostsClientInstance.getPost(postId).then(
        async (res) => (await res.json()) as IFormattedPostDto
      ),
    queryKey: PostQueryKey({ postId })
  })
}
