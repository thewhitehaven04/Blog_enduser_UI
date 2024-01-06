import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'

export function useComments(
  postId: string,
  params: IPaginationParams
): UseQueryResult<IDataResponse<ITransformedCommentDataDto>, Error> {
  return useQuery({
    queryFn: async () =>
      await CommentClientInstance.getPostComments(postId, params).then(
        async (res) =>
          await (res.json() as Promise<
            IDataResponse<ITransformedCommentDataDto>
          >)
      ),
    queryKey: ['comments', params, postId]
  })
}
