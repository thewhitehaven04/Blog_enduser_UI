import { object, string } from 'yup'

export const AddCommentSchema = object({
  text: string()
    .required('Comment must not be empty')
    .min(2, 'Your comment must be at least 2 characters long')
})
