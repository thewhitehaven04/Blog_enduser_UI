import { useQuery, useQueryClient } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type TGetPostCommentsResponseDto } from 'Client/postComments/types/responses'
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
    queryFn: async () =>
      await CommentClientInstance.getPostComments({ postId, ...params }).then(
        async (res) =>
          await (res.json() as Promise<TGetPostCommentsResponseDto>)
      ),
    queryKey: CommentsQueryKey({ postId, params }),
    initialData: () =>
      queryClient.getQueryData<TGetPostCommentsResponseDto>(
        CommentsQueryKey({
          postId,
          params: { ...params, count: params.count - countIncrement }
        })
      )
  })
}
