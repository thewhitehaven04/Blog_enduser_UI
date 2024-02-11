import {
  type UseQueryResult,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import { type IGetPostsRequestParamsDto } from 'Client/posts/types/requests'
import {
  type IFormattedPostDto,
  type TGetPostsResponse
} from 'Client/posts/types/responses'

export const PostsQueryKey = ({
  pagination
}: {
  pagination: IGetPostsRequestParamsDto
}): [string, IGetPostsRequestParamsDto] => ['posts', pagination]

export function usePosts(
  pagination: IGetPostsRequestParamsDto,
  defaultIncrement: number
): UseQueryResult<ISuccessfulPaginatedResponse<IFormattedPostDto>, Error> {
  const queryClient = useQueryClient()

  return useQuery({
    queryFn: async () => {
      const postResponse = (await (
        await PostsClientInstance.getPosts(pagination)
      ).json()) as TGetPostsResponse

      if (postResponse.success) {
        return postResponse
      }

      throw new Error('Unable to load post data. Please, try again later')
    },
    queryKey: PostsQueryKey({ pagination }),
    initialData: () =>
      queryClient.getQueryData<ISuccessfulPaginatedResponse<IFormattedPostDto>>(
        PostsQueryKey({
          pagination: {
            ...pagination,
            count: pagination.count - defaultIncrement
          }
        })
      )
  })
}
