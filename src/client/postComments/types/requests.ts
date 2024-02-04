export interface ICommentRequestParams {
  postId: string
  count: number 
  offset: number 
}

export interface IPostCommentBody {
  postId: string
  text: string
}

export interface IPatchCommentBody {
  text: string
}