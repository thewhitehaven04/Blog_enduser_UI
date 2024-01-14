import { type TGenericResponse } from 'Client/base/types/responses'

export interface ITransformedCommentDto {
  text: string
  author: {
    email: string
    username: string
  }
  created: string
}
export interface ITransformedCommentArrayDto {
  comments: ITransformedCommentDto[]
  count: number
  offset: number
}


export type TPostCommentResponseDto = TGenericResponse<ITransformedCommentDto>