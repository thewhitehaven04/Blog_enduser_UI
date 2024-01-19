import { useQuery } from '@tanstack/react-query'
import { CommentClientInstance } from 'Client/postComments'
import { type TGetPostCommentsResponseDto } from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'
import { type TUseCommentsResult } from 'Hooks/queries/comments/types'

// export function useComments(
//   postId: string,
//   params: IPaginationParams
// ): TUseCommentsResult {
//   const pageSize = 10
//   const initialPageParams: IPaginationParams = { offset: 0, count: pageSize }

//   const infiniteQuery = useInfiniteQuery({
//     queryFn: async (params) =>
//       await CommentClientInstance.getPostComments(
//         postId,
//         params.pageParam
//       ).then(
//         async (res) =>
//           await (res.json() as Promise<TGetPostCommentsResponseDto>)
//       ),
//     queryKey: ['comments', postId],
//     initialPageParam: initialPageParams,
//     getNextPageParam: (lastPage) => {
//       if (!lastPage.success) {
//         // placeholder error to figure out how they propagate
//         throw Error('unsuccesful fetch')
//       }
//       const {
//         pagination: { totalCount, count }
//       } = lastPage
//       if (count < totalCount) {
//         return {
//           offset: 0,
//           count: params.count + pageSize
//         }
//       }
//     }
//   })

//   return {
//     ...infiniteQuery,
//     accumulatedPage:
//       infiniteQuery.data?.pages[infiniteQuery.data?.pages.length - 1 ?? 0]
//   }
// }

export function useComments(
  postId: string,
  params: IPaginationParams
): TUseCommentsResult {
  return useQuery({
    queryFn: async () =>
      await CommentClientInstance.getPostComments(postId, params).then(
        async (res) =>
          await (res.json() as Promise<TGetPostCommentsResponseDto>)
      ),
    queryKey: ['comments', postId, params]
  })
}
