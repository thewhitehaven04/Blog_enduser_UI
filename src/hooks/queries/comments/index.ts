import {
  useInfiniteQuery,
  type UseInfiniteQueryResult,
  type InfiniteData
} from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'

export function useComments(
  postId: string,
  params: IPaginationParams
): UseInfiniteQueryResult<
  InfiniteData<IDataResponse<ITransformedCommentDataDto>, unknown>,
  Error
> {
  const pageSize = 10

  return useInfiniteQuery({
    queryFn: async (params) =>
      await CommentClientInstance.getPostComments(
        postId,
        params.pageParam
      ).then(
        async (res) =>
          await (res.json() as Promise<
            IDataResponse<ITransformedCommentDataDto>
          >)
      ),
    queryKey: ['comments', postId],
    initialPageParam: { offset: 0, count: pageSize },
    getNextPageParam: (lastPage) => {
      const { data } = lastPage
      if (data.count > data.offset + pageSize) {
        return {
          offset: data.offset + pageSize,
          count: params.count
        }
      }
    }
  })
}
