import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { type ISuccessfulResponse } from 'Client/base/types/responses'
import { PostsClientInstance } from 'Client/posts'
import {
  type IFormattedPostDto,
  type TGetPostResponse
} from 'Client/posts/types/responses'
import { EToastType } from 'Hooks/context/toaster/types'
import { useToasterEnqueue } from 'Hooks/toasterEnqueue'

export const PostQueryKey = ({ postId }: { postId: string }): string[] => [
  'post',
  postId
]

export function usePost(
  postId: string
): UseQueryResult<ISuccessfulResponse<IFormattedPostDto>, Error> {
  const { toast } = useToasterEnqueue()

  return useQuery({
    queryFn: async () => {
      const postResponse = (await (
        await PostsClientInstance.getPost(postId)
      ).json()) as TGetPostResponse

      if (postResponse.success) {
        return postResponse
      }

      toast({
        type: EToastType.ERROR,
        text: `Unable to load the post`
      }) 
    },
    queryKey: PostQueryKey({ postId })
  })
}
