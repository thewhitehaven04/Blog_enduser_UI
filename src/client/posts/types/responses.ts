import { type TPaginatedResponse } from 'Client/base/types/responses'

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
}

export type TGetPostsResponse = TPaginatedResponse<IFormattedPostDto>
