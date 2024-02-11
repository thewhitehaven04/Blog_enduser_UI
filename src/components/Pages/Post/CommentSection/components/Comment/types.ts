export interface ICommentProps {
  id: string
  author: string 
  text: string
  created: string 
  postId: string
}

export interface ICommentEditForm {
  text: string
}