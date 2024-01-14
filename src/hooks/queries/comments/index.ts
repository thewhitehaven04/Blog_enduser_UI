import { useInfiniteQuery } from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type ITransformedCommentArrayDto } from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'
import {
  type IInfiniteCommentData,
  type TUseCommentsResult
} from 'Hooks/queries/comments/types'

export function useComments(
  postId: string,
  params: IPaginationParams
): TUseCommentsResult {
  const pageSize = 10
  const pageParams: IPaginationParams = { offset: 0, count: pageSize }

  return useInfiniteQuery({
    queryFn: async (params) =>
      await CommentClientInstance.getPostComments(
        postId,
        params.pageParam
      ).then(
        async (res) =>
          await (res.json() as Promise<
            IDataResponse<ITransformedCommentArrayDto>
          >)
      ),
    select: (data) => {
      const commentData: IInfiniteCommentData = {
        pages: data.pages.map((data) => data.data.comments),
        count: data.pages[data.pages.length - 1].data.count
      }
      return commentData
    },
    queryKey: ['comments', postId],
    initialPageParam: pageParams,
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
