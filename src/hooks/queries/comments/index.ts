import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import {
  type ITransformedCommentDto,
  type TGetPostCommentsResponseDto
} from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'
import { type TUseCommentsResult } from 'Hooks/queries/comments/types'

export const CommentsQueryKey = ({
  postId,
  params
}: {
  postId: string
  params: IPaginationParams
}): [string, string, IPaginationParams] => ['comments', postId, params]

export function useComments(
  postId: string,
  params: IPaginationParams,
  countIncrement: number
): TUseCommentsResult {
  const queryClient = useQueryClient()

  return useQuery({
    queryFn: async () => {
      const response = (await (
        await CommentClientInstance.getPostComments({ postId, ...params })
      ).json()) as TGetPostCommentsResponseDto

      if (response.success) {
        return response
      }

      throw new Error('Unable to retrieve comments for this post')
    },
    queryKey: CommentsQueryKey({ postId, params }),
    initialData: () =>
      queryClient.getQueryData<
        ISuccessfulPaginatedResponse<ITransformedCommentDto>
      >(
        CommentsQueryKey({
          postId,
          params: { ...params, count: params.count - countIncrement }
        })
      )
  })
}
