import {
  type TGenericResponse,
  type TPaginatedResponse
} from 'Client/base/types/responses'

export interface ITransformedCommentDto {
  _id: string,
  text: string
  author: {
    email: string
    username: string
  }
  created: string
  post: string
}

export type TPostCommentResponseDto = TGenericResponse<ITransformedCommentDto>

export type TUpdateCommentResponseDto = TGenericResponse<ITransformedCommentDto>

export type TGetPostCommentsResponseDto =
  TPaginatedResponse<ITransformedCommentDto>