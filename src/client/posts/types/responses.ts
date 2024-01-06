export interface IFormattedPostDto {
  id: string,
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

export interface IPostsCollectionDto {
  posts: IFormattedPostDto[],
  totalCount: number
}