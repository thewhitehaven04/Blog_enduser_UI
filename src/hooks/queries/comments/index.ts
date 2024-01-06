import {
  type UseQueryResult,
  useQuery,
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

export function useInfiniteComments(
  postId: string,
  params: IPaginationParams
): UseInfiniteQueryResult<
  InfiniteData<IDataResponse<ITransformedCommentDataDto>, unknown>,
  Error
> {
  const offsetStep = 10

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
    queryKey: ['comments', params, postId],
    initialPageParam: { offset: 0, count: 10 },
    getNextPageParam: (lastPage) => {
      return { offset: lastPage.data.offset + offsetStep, count: params.count }
    }
  })
}
