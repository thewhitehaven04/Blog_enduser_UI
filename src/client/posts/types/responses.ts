import { type TGenericResponse, type TPaginatedResponse } from 'Client/base/types/responses'

export interface IFormattedPostDto {
  id: string
  title: string
  text: string
  author: {
    username: string
    email: string
  }
  updated: string | null
  published: string
  isPublished: boolean
  summary: string
}

export type TGetPostsResponse = TPaginatedResponse<IFormattedPostDto>

export type TGetReadMoreResponse = TPaginatedResponse<IFormattedPostDto>

export type TGetPostResponse = TGenericResponse<IFormattedPostDto> 