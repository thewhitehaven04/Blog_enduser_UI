import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { ISuccessfulPaginatedResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import {
  type ITransformedCommentDto,
  type TGetPostCommentsResponseDto
} from 'Client/postComments/types/responses'
import { EToastType } from 'Hooks/context/toaster/types'
import { type IPaginationParams } from 'Hooks/pagination/types'
import { type TUseCommentsResult } from 'Hooks/queries/comments/types'
import { useToasterEnqueue } from 'Hooks/toaster'

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
  const { toast } = useToasterEnqueue()

  return useQuery({
    queryFn: async () => {
      const response = (await (
        await CommentClientInstance.getPostComments({ postId, ...params })
      ).json()) as TGetPostCommentsResponseDto

      if (response.success) {
        return response
      }

      toast({ text: 'Unable to retrieve comment data', type: EToastType.ERROR })
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
