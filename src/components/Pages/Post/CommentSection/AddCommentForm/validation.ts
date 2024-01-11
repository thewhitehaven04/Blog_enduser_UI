import { object, string } from 'yup'

export const AddCommentSchema = object({
  text: string()
    .required('Message must not be empty')
    .min(2, 'Your message must be at least 2 characters long')
})
