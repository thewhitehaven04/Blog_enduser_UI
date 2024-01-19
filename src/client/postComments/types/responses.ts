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
}

export type TPostCommentResponseDto = TGenericResponse<ITransformedCommentDto>

export type TGetPostCommentsResponseDto =
  TPaginatedResponse<ITransformedCommentDto>