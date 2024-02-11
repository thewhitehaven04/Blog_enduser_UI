import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import { type IFormattedPostDto } from 'Client/posts/types/responses'

export const ReadMoreKey = ({
  postId
}: {
  postId: string
}): [string, string] => ['readMore', postId]

export function useReadMore(
  postId: string
): UseQueryResult<ISuccessfulPaginatedResponse<IFormattedPostDto>, Error> {
  return useQuery({
    queryFn: async () => {
      const response = (await (
        await PostsClientInstance.getReadMore(postId)
      ).json()) as ISuccessfulPaginatedResponse<IFormattedPostDto>

      if (response.success) {
        return response
      }

      throw new Error('Unable to retrieve post recommendations')
    },
    queryKey: ReadMoreKey({ postId }),
  })
}
