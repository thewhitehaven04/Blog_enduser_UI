import { useQuery } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { CommentClientInstance } from 'Client/postComments'
import { type ITransformedCommentDataDto } from 'Client/postComments/types/responses'
import { type IPaginationParams } from 'Hooks/pagination/types'
import { useState } from 'react'

export function useComments(postId: string, params: IPaginationParams) {
  const [serverErrors, setServerErrors] = useState(null)

  const query = useQuery({
    queryFn: async () =>
      await CommentClientInstance.getPostComments(postId ?? '', params).then(
        async (res) =>
          await (res.json() as Promise<TGenericResponse<ITransformedCommentDataDto>>)
      ),
    queryKey: ['comments', params]
  })

  if (!query.data?.success) {
    setServerErrors(query.data?.errors)
  }

  return { ...query, serverErrors }
}
