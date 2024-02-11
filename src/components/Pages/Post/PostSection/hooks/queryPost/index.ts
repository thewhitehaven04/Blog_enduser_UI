import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type ISuccessfulResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import {
  type IFormattedPostDto,
  type TGetPostResponse
} from 'Client/posts/types/responses'

export const PostQueryKey = ({ postId }: { postId: string }): string[] => [
  'post',
  postId
]

export function usePost(
  postId: string
): UseQueryResult<ISuccessfulResponse<IFormattedPostDto>, Error> {
  return useQuery({
    queryFn: async () => {
      const postResponse = (await (
        await PostsClientInstance.getPost(postId)
      ).json()) as TGetPostResponse

      if (postResponse.success) {
        return postResponse
      }

      throw new Error('Unable to load the post')
    },
    queryKey: PostQueryKey({ postId }),
  })
}
