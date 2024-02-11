import { object, string } from 'yup'

export const CommentEditFormSchema = object({
  text: string()
    .required('Comment must be non empty')
    .min(2, 'Comment must be at least 2 characters long')
})
