import { type TGenericResponse } from 'Client/base/types/responses'

export interface ITransformedCommentDataDto {
  comments: Array<{
    text: string
    author: {
      email: string
      username: string
    }
    created: string
  }>
  count: number
  offset: number
}


export type TPostCommentResponseDto = TGenericResponse<{ id: string }>